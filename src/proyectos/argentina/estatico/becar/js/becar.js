(function($) {
$(document).ready(function () {


    $.getJSON('https://spreadsheets.google.com/feeds/list/1CFdttPTD_zPz6awvGZ_UfiDB7wJDALtSsoJTY62nIlM/1/public/values?alt=json', function (data) {
        window.convocatorias = data.feed.entry;
        showConvocatorias('todas');
        console.log(data);

    });

    window.showConvocatorias = function(modalidad){
        var showData = $('#show-data');
        console.log("entro"); 
        console.log(modalidad); 
        var html = '';
        $.each( convocatorias, function( key, item ) {

            if(modalidad == 'todas' || modalidad == item.gsx$modalidad.$t){
                console.log(modalidad); 
            console.log(item.gsx$modalidad.$t);
                //console.log("testeo"+item.gsx$nombre.$t);
            html += '<tr data-toggle="collapse" href="#id_'+ key + '">';
            html += ' <th scope="row">&nbsp;&nbsp;';
            html += '   <a data-toggle="collapse" href="#id_'+ key + '">';
            html += '     <i class="fa fa-plus text-success" aria-hidden="true"></i>';
            html += '   </a>';
            html += ' </th>';
            html += ' <td>';
            html += '   <div class="nombre">'+ item.gsx$nombre.$t + '</div>';
            html += '   <div class="collapse" id="id_'+ key + '">';
            html += '     <div><strong>Fecha de inicio: </strong><span class="fechainicio">'+ item.gsx$fechainicio.$t + '</span></div>';
            html += '     <div><strong>Fecha de fin: </strong><span class="fechafin">'+ item.gsx$fechafin.$t + '</span></div>';
            html += '   </div>';
            html += ' </td>';
            html += ' <td class="instituciones">'+ item.gsx$instituciones.$t + '</td>';
            html += ' <td class="areaTematica">'+ item.gsx$áreatemática.$t + '</td>';
            html += ' <td class="paises">'+ item.gsx$paises.$t + '</td>';
            html += ' <td class="modalidad">'+ item.gsx$modalidad.$t + '</td>';
            //html += ' <td class="precio td-strong text-success">$'+ item['gsx$'+modalidad].$t + '</td>';
            html += '</tr>';    
            }
            
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'nombre', 'instituciones', 'areaTematica', 'paises', 'modalidad' ] };
        var convocatoriasList = new List('convocatorias', listOptions);
    }

    //cambiando clase de icons en tablas
    $('body').on('click', '.list a', function(){
        $(this).find('i').toggleClass('fa-plus fa-minus'); 
        $(this).find('i').toggleClass('text-success text-danger'); 
    });

    $(".btn-group a").on("click", function() {
      $(this).addClass('active').siblings().removeClass('active'); 
      var modalidad = $(this).data("modalidad");
      showConvocatorias(modalidad);
    });    

});
})(jQuery);




     
