
  $('[data-render=mes]').text( moment().format('MMMM') );

  var initMap = function(){

    var templates = {
      barrio: '<div class="col-md-4 m-y-1"><h4 class="m-t-2">{lugar}</h4><p><strong>Fecha:</strong> Desde el {inicio} hasta el {fin}.</p><p><strong>Horario:</strong> de {hora}</p><p><strong>Dirección:</strong> {direccion}</p></div>',
      servicios: '<h5 class="m-t-3">{categoria}</h5><div id="servicios-{i}"><ul class="list">',
    }

    var listado = [];
    var markers = [];
    var categoriasServicios = [];
    var listadoServicios = [];

    var render = {
      barrios: function( ){

        $('[data-render=barrios]').html('');

        console.log( listado );

        if( listado.length == 0 ){
          $('.lugares-mensaje').removeClass('hidden');

        }else{
          $('.lugares-mapa').removeClass('hidden');

          // Setup map

          var mapCenter = {lat: -41.2148693, lng: -66.3996161};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: mapCenter,
            scrollwheel: false
          });

          var latlngbounds = new google.maps.LatLngBounds();

          $.each(listado, function(index, item){

            var html = templates.barrio;

            html = html
            .replace(/{inicio}/gi, item.inicio)
            .replace(/{fin}/gi, item.fin)
            .replace(/{hora}/gi, item.hora)
            .replace(/{direccion}/gi, item.direccion)
            .replace(/{lugar}/gi, item.lugar);

            $('[data-render=barrios]').append( html );

            var index = markers.length;
            markers[index] = new google.maps.Marker({
              map: map,
              position: {lat: parseFloat(item.lat), lng: parseFloat(item.lng)},
              title: item.lugar,
              icon: {
                url: 'https://www.argentina.gob.ar/sites/default/files/marker.png',
                size: new google.maps.Size(20, 20),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(10, 10)
              }
            });

            latlngbounds.extend( new google.maps.LatLng( parseFloat(item.lat), parseFloat(item.lng) ) );

            markers[index].addListener('click', function() {
              $('[data-render=barrios] > div').removeClass('bg-gray').eq( index ).addClass('bg-gray');
            });

          });

          map.setCenter(latlngbounds.getCenter());
          map.fitBounds(latlngbounds); 

          $('body').on('click', '[data-render=barrios] > div', function(){
            $('[data-render=barrios] > div').removeClass('bg-gray').eq( $(this).index() ).addClass('bg-gray');
            map.setCenter( markers[$(this).index()].getPosition() );
            map.setZoom( 10 );
          });

        }

      },
      servicios: function( ){

        $('[data-render=servicios]').html('');

        window.serviciosList = [];

        $.each(listadoServicios, function(index, items){

          var html = templates.servicios;

          html = html
          .replace(/{categoria}/gi, categoriasServicios[index])
          .replace(/{i}/gi, index);

          $.each(items, function(index, item){
            html += '<li><span class="servicio">'+ item +'.</span></li>';
          });

          $('[data-render=servicios]').append( html + '</ul></div>' );

          var listOptions = { 
            valueNames: [ 'servicio' ],
            fuzzySearch: {
              searchClass: "search",
              location: 0,
              distance: 100,
              threshold: 0.4,
              multiSearch: true
            }

          };
          serviciosList[index] = new List('servicios-'+ index, listOptions);

        });
      }      
    }

    $.ajax({
      url: 'https://spreadsheets.google.com/feeds/list/1uQHpsEICNl5SMBmsQZYse4dUo7DySYwGeBz9xh2NQC8/'+ idProvincia +'/public/values?alt=json',
      data: 'json',
      success: function(response){

        $.each(response.feed.entry, function(index, row){

          if( moment(row.gsx$inicio.$t, 'DD-MM-AAAA').isValid() 
              && moment(row.gsx$fin.$t, 'DD-MM-AAAA').isValid()
              && moment(row.gsx$inicio.$t, 'DD-MM-AAAA').isBefore( moment().add(30, 'days') )
              && moment(row.gsx$fin.$t, 'DD-MM-AAAA').isAfter( moment() ) 
            ){

            console.log();

            listado.push({
              inicio: row.gsx$inicio.$t,
              fin: row.gsx$fin.$t,
              hora: row.gsx$hora.$t,
              direccion: row.gsx$direccion.$t,
              lugar: row.gsx$lugar.$t,
              lat: row.gsx$latitud.$t,
              lng: row.gsx$longitud.$t,
            });
          }

        });

        render.barrios();

      }
    });

    $.ajax({
      url: 'https://spreadsheets.google.com/feeds/list/1Ex6cZfAfaAqW7EZAuHMr9Vf6TbyRq2OaTDDfrK5Mn0I/'+ idProvincia +'/public/values?alt=json',
      data: 'json',
      success: function(response){

        $.each(response.feed.entry, function(index, row){
          if( categoriasServicios.indexOf( row.gsx$categoria.$t ) == -1 ){
            categoriasServicios.push( row.gsx$categoria.$t )
            listadoServicios[ categoriasServicios.length - 1 ] = [ row.gsx$servicio.$t ];
          }else{
            var categoria = categoriasServicios.indexOf( row.gsx$categoria.$t );
            listadoServicios[ categoria ].push( row.gsx$servicio.$t );
          }
        });
        render.servicios();
      }
    });


    $('body').on('mouseover', '[data-render=barrios] > div', function(){
      $('[data-render=barrios] > div').css('cursor', 'pointer');
    });

    $('#search').on('click', function(event){
      buscar();
      event.preventDefault();
    });

    $('form[role=search]').on('submit', function(event){
      buscar();
      event.preventDefault();
    });



    var buscar = function(){
      var busqueda = $('.search').val()
      $.each(serviciosList, function(index, item){
        serviciosList[index].fuzzySearch( busqueda );

        if(serviciosList[index].matchingItems.length == 0){
          $('#servicios-'+ index ).prev().addClass('hidden');
        }else{
          $('#servicios-'+ index ).prev().removeClass('hidden');
        }
      })
    }


  };




