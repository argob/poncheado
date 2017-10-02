(function($) {
            var dataProv = [
                            {
                                provincia: "CAB",
                                localidad: []
                            },
                            {
                                provincia: "BSA",
                                localidad: []
                            },
                            {
                                provincia: "CAT",
                                localidad: []
                            },
                            {
                                provincia: "COR",
                                localidad: []
                            },
                            {
                                provincia: "CRR",
                                localidad: []
                            },
                            {
                                provincia: "CHA",
                                localidad: []
                            },
                            {
                                provincia: "CHU",
                                localidad: []
                            },
                            {
                                provincia: "ENT",
                                localidad: []
                            },
                            {
                                provincia: "FOR",
                                localidad: []
                            },
                            {
                                provincia: "JUJ",
                                localidad: []
                            },                
                            {
                                provincia: "PAM",
                                localidad: []
                            },
                            {
                                provincia: "RIO",
                                localidad: []
                            },
                            {
                                provincia: "MEN",
                                localidad: []
                            },
                            {
                                provincia: "MIS",
                                localidad: []
                            },
                            {
                                provincia: "NEU",
                                localidad: []
                            },
                            {
                                provincia: "RNE",
                                localidad: []
                            },
                            {
                                provincia: "SAL",
                                localidad: []
                            },
                            {
                                provincia: "SJU",
                                localidad: []
                            },
                            {
                                provincia: "SLU",
                                localidad: []
                            },
                            {
                                provincia: "SCR",
                                localidad: []
                            },
                            {
                                provincia: "SFE",
                                localidad: []
                            },
                            {
                                provincia: "SDE",
                                localidad: []
                            },
                            {
                                provincia: "TDF",
                                localidad: []
                            },
                            {
                                provincia: "TUC",
                                localidad: []
                            }                                                                                                                                        
                        ]    


// pusheo localidades a partir de spreadsheet


$.getJSON('../js/localidades.json', function (dataLugares) {

    window.dataDrive = dataLugares.feed.entry;

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "CIUDAD AUTONOMA DE BUENOS AIRES"){

        if(dataProv[0].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[0].localidad.push(item.gsx$localidad.$t);
          dataProv[0].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "BUENOS AIRES"){

        if(dataProv[1].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[1].localidad.push(item.gsx$localidad.$t);
          dataProv[1].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "CATAMARCA"){

        if(dataProv[2].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[2].localidad.push(item.gsx$localidad.$t);
          dataProv[2].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "CÓRDOBA"){

        if(dataProv[3].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[3].localidad.push(item.gsx$localidad.$t);
          dataProv[3].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "CORRIENTES"){

        if(dataProv[4].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[4].localidad.push(item.gsx$localidad.$t);
          dataProv[4].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "CHACO"){

        if(dataProv[5].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[5].localidad.push(item.gsx$localidad.$t);
          dataProv[5].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "CHUBUT"){

        if(dataProv[6].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[6].localidad.push(item.gsx$localidad.$t);
          dataProv[6].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "ENTRE RIOS"){

        if(dataProv[7].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[7].localidad.push(item.gsx$localidad.$t);
          dataProv[7].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "FORMOSA"){

        if(dataProv[8].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[8].localidad.push(item.gsx$localidad.$t);
          dataProv[8].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "JUJUY"){

        if(dataProv[9].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[9].localidad.push(item.gsx$localidad.$t);
          dataProv[9].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "LA PAMPA"){

        if(dataProv[10].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[10].localidad.push(item.gsx$localidad.$t);
          dataProv[10].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "LA RIOJA"){

        if(dataProv[11].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[11].localidad.push(item.gsx$localidad.$t);
          dataProv[11].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "MENDOZA"){

        if(dataProv[12].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[12].localidad.push(item.gsx$localidad.$t);
          dataProv[12].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "MISIONES"){

        if(dataProv[13].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[13].localidad.push(item.gsx$localidad.$t);
          dataProv[13].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "NEUQUEN"){

        if(dataProv[14].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[14].localidad.push(item.gsx$localidad.$t);
          dataProv[14].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "RIO NEGRO"){

        if(dataProv[15].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[15].localidad.push(item.gsx$localidad.$t);
          dataProv[15].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "SALTA"){

        if(dataProv[16].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[16].localidad.push(item.gsx$localidad.$t);
          dataProv[16].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "SAN JUAN"){

        if(dataProv[17].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[17].localidad.push(item.gsx$localidad.$t);
          dataProv[17].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "SAN LUIS"){

        if(dataProv[18].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[18].localidad.push(item.gsx$localidad.$t);
          dataProv[18].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "SANTA CRUZ"){

        if(dataProv[19].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[19].localidad.push(item.gsx$localidad.$t);
          dataProv[19].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "SANTA FE"){

        if(dataProv[20].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[20].localidad.push(item.gsx$localidad.$t);
          dataProv[20].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "SANTIAGO DEL ESTERO"){

        if(dataProv[21].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[21].localidad.push(item.gsx$localidad.$t);
          dataProv[21].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "TIERRA DEL FUEGO"){

        if(dataProv[22].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[22].localidad.push(item.gsx$localidad.$t);
          dataProv[22].localidad.sort();
        }

      }
    });

    $.each( dataDrive, function( key, item ) {
      if (item.gsx$provincia.$t == "TUCUMAN"){

        if(dataProv[23].localidad.indexOf(item.gsx$localidad.$t) == -1){
          dataProv[23].localidad.push(item.gsx$localidad.$t);
          dataProv[23].localidad.sort();
        }

      }
    });

    localidadFn();

});


function localidadFn( jQuery ) {
    var localidadFieldset = $('select[name="localidad"]').parent();
    if ($('select[name="provincia"]').value === ''  ) {
        localidadFieldset.attr('disabled', true);
    } else {
        localidadFieldset.removeAttr('disabled');
    }
    var indexProvincia = $('select[name="provincia"]').find(":selected").index();
    load_localidades(indexProvincia);
}
   
// hasta acá pusheo


if ($('select[name="provincia"]').val() === '') {
    $('select[name="localidad"]').attr('disabled', true);
}

$('select[name="provincia"]').on('change', function() {
    var localidadFieldset = $('select[name="localidad"]');
    console.log(this.value === '')
    if (this.value === '') {
        localidadFieldset.attr('disabled', true);
    } else {
        localidadFieldset.removeAttr('disabled');
    }

    var indexProvincia = $(this).find(":selected").index();
    load_localidades(indexProvincia);

});


// -----------------------------------------------------------------


function load_localidades(indexProvincia) {

    $('select[name="localidad"]').empty().append('<option value="" selected>Seleccionar</option>');
        var aux, localidad, _i, _len;
        dataLocalidades = dataProv[indexProvincia - 1].localidad;

        for (_i = 0, _len = dataLocalidades.length; _i < _len; _i++) {
            localidad = dataLocalidades[_i];
            $('select[name="localidad"]').append('<option value="' + localidad +'">' + localidad +'</option>');
        }

}

})(jQuery);




     
