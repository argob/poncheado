$(document).ready(function () {

    var showData = $('#show-data');

    $.getJSON('https://spreadsheets.google.com/feeds/list/1EreI6pWCVbiqbyURniaRx-keRHzBhyZ-6p01VSqOtms/1/public/values?alt=json', function (data) {
        //console.log(data);

        var html = '';
        $.each( data.feed.entry, function( key, item ) {
            //console.log("testeo"+item.gsx$ean.$t);

            
            html += '<tr>';
            html += ' <th scope="row">&nbsp;&nbsp;';
            html += '   <a data-toggle="collapse" href="#id_'+ key + '">';
            html += '     <i class="fa fa-plus text-success" aria-hidden="true"></i>';
            html += '   </a>';
            html += ' </th>';
            html += ' <td>';
            html += '   <div class="nombre">'+ item.gsx$producto.$t + '</div>';
            html += '   <div class="collapse" id="id_'+ key + '">';
            html += '     <div><strong>Categor&iacute;a: </strong><span class="categoria">'+ item.gsx$categoría.$t + '</span></div>';
            html += '     <div><strong>EAN: </strong><span class="ean">'+ item.gsx$ean.$t + '</span></div>';
            html += '   </div>';
            html += ' </td>';
            html += ' <td class="marca">'+ item.gsx$marca.$t + '</td>';
            html += ' <td class="medida td-strong">'+ item.gsx$cantidad.$t + '</td>';
            html += ' <td class="precio td-strong text-success">'+ item.gsx$amba.$t + '</td>';
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);


        var listOptions = {valueNames: [ 'nombre', 'marca', 'medida', 'precio', 'categoria', 'ean' ] };
        var productsList = new List('productos', listOptions);
    });

    //cambiando clase de icons en tablas
    $('body').on('click', '.list a', function(){
        $(this).find('i').toggleClass('fa-plus fa-minus'); 
        $(this).find('i').toggleClass('text-success text-danger'); 
    });

});




     
