(function($) {
$(document).ready(function () {

    $.getJSON('https://interfaces.argentina.gob.ar/api/public/v1.0/inap/1AikOjiZIH6J0Mr99YXUIxB9FNH0NH9WLLP_432ejEnI/1', function (data) {
    //$.getJSON('data_bancos.txt', function (data) {
        window.convocatorias = data.feed.entry;
        showconvocatorias();
        console.log(data);
    });

    window.showconvocatorias = function(){
        var showData = $('#show-data');

        var html = '';
        $.each( convocatorias, function( key, item ) {
            //console.log("testeo"+item.gsx$ean.$t);
            html += '<tr>';
            html += ' <td class="denominacion"> <b>'+ item.gsx$denominacion.$t + '</b><br> Tipo de cargo: ' + item.gsx$cargo.$t + '<br> Agrupamiento: ' + item.gsx$agrupamiento.$t + '<br>Nivel: ' + item.gsx$nivel.$t + '</td>';
            html += ' <td class="jurisdiccion">'+ item.gsx$jurisdiccion.$t + '</td>';
            html += ' <td class="organismo">'+ item.gsx$organismo.$t + '</td>';
            html += ' <td class="tipo">'+ item.gsx$tipo.$t + '</td>';
            html += ' <td class="reservadiscapacidad">'+ item.gsx$reservadiscapacidad.$t + '</td>';
            html += ' <td class="familia">'+ item.gsx$familia.$t + '</td>';
            html += ' <td class="zona">'+ item.gsx$zona.$t + '</td>';
            
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        // var listOptions = {valueNames: [ 'jurisdiccion', 'organismo', 'tipo', 'cargo', 'agrupamiento', 'nivel', 'reservadiscapacidad', 'familia', 'zona', 'denominacion' ] };
        var listOptions = {valueNames: [ 'jurisdiccion', 'organismo', 'denominacion' ] };
        var convocatoriasList = new List('convocatorias', listOptions);
    }


});
})(jQuery);


