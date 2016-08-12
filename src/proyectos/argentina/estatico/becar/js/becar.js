(function($) {
$(document).ready(function () {


    $.getJSON('https://spreadsheets.google.com/feeds/list/1CFdttPTD_zPz6awvGZ_UfiDB7wJDALtSsoJTY62nIlM/1/public/values?alt=json', function (data) {
        window.products = data.feed.entry;
        showProducts('todas');
        console.log(data);
    });

    window.showProducts = function(modalidad){
        var showData = $('#show-data');

        var html = '';
        $.each( products, function( key, item ) {
            console.log("testeo"+item.gsx$nombre.$t);
            html += '<tr data-toggle="collapse" href="#id_'+ key + '">';
            html += ' <th scope="row">&nbsp;&nbsp;';
            html += '   <a data-toggle="collapse" href="#id_'+ key + '">';
            html += '     <i class="fa fa-plus text-success" aria-hidden="true"></i>';
            html += '   </a>';
            html += ' </th>';
            html += ' <td>';
            html += '   <div class="nombre">'+ item.gsx$nombre.$t + '</div>';
            html += '   <div class="collapse" id="id_'+ key + '">';
            html += '     <div><strong>Fecha de inicio: </strong><span class="categoria">'+ item.gsx$fechainicio.$t + '</span></div>';
            html += '     <div><strong>Fecha de fin: </strong><span class="ean">'+ item.gsx$fechafin.$t + '</span></div>';
            html += '   </div>';
            html += ' </td>';
            html += ' <td class="marca">'+ item.gsx$instituciones.$t + '</td>';
            html += ' <td class="medida">'+ item.gsx$áreatemática.$t + '</td>';
            html += ' <td class="medida">'+ item.gsx$paises.$t + '</td>';
            html += ' <td class="medida">'+ item.gsx$modalidad.$t + '</td>';
            //html += ' <td class="precio td-strong text-success">$'+ item['gsx$'+modalidad].$t + '</td>';
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'nombre', 'marca', 'medida', 'precio', 'categoria', 'ean' ] };
        var productsList = new List('productos', listOptions);
    }

    //cambiando clase de icons en tablas
    $('body').on('click', '.list a', function(){
        $(this).find('i').toggleClass('fa-plus fa-minus'); 
        $(this).find('i').toggleClass('text-success text-danger'); 
    });

    $(".btn-group a").on("click", function() {
      $(this).addClass('active').siblings().removeClass('active'); 
      var modalidad = $(this).data("modalidad");
      showProducts(modalidad);
    });    

});
})(jQuery);




     
