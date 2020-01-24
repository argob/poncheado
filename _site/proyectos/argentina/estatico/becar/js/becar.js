(function($) {
$(document).ready(function () {


    $.getJSON('https://spreadsheets.google.com/feeds/list/1CFdttPTD_zPz6awvGZ_UfiDB7wJDALtSsoJTY62nIlM/1/public/values?alt=json', function (data) {
        window.convocatorias = data.feed.entry;
        showConvocatorias('todas');
        //console.log(data);

    });

    window.showConvocatorias = function(modalidad){
        var showData = $('#show-data');
        //console.log(modalidad); 
        var html = '';
        $.each( convocatorias, function( key, item ) {

            if(modalidad == 'todas' || modalidad == item.gsx$modalidad.$t){
                console.log(modalidad); 
            console.log(item.gsx$modalidad.$t);
            console.log(item.gsx$fechafin.$t);

            var fechaInicio = item.gsx$fechainicio.$t;
            var fechaFin = item.gsx$fechafin.$t;

            if(fechaInicio == '') {
                fechaInicio = "Sin definir";
            }    
            if(fechaFin == '') {
                fechaFin = "Sin definir";
            }    

            console.log(fechaFin);

                //console.log("testeo"+item.gsx$nombre.$t);
            html += '<tr>';
            html += ' <td class="nombre"> <h6 class="nombre"><a href="'+ item.gsx$link.$t + '">'+ item.gsx$nombre.$t + '</a></h6><p class="margin-0 fechainicio"><small>Fecha de inicio: ' + fechaInicio + '</small></p><p class="margin-0 fechafin"><small>Fecha de fin: ' + fechaFin + '</small></p></td>';
            html += ' <td class="instituciones">'+ item.gsx$instituciones.$t + '</td>';
            html += ' <td class="areaTematica">'+ item.gsx$áreatemática.$t + '</td>';
            html += ' <td class="paises">'+ item.gsx$paises.$t + '</td>';
            html += ' <td class="modalidad">'+ item.gsx$modalidad.$t + '</td>';
            html += '</tr>';    
            }
            
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'nombre', 'instituciones', 'areaTematica', 'paises', 'modalidad' ] };
        var convocatoriasList = new List('convocatorias', listOptions);
    }

    $(".btn-group a").on("click", function() {
      $(this).addClass('active').siblings().removeClass('active'); 
      var modalidad = $(this).data("modalidad");
      showConvocatorias(modalidad);
    });    

});
})(jQuery);




     
