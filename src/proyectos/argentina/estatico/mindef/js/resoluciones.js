(function($) {
$(document).ready(function () {

    $.getJSON('https://interfaces.argentina.gob.ar/api/public/v1.0/inap/1WpC0D-cnTtm9sdBnF6wymiRMXTVKEor_6m1_DGlxKJA/1', function (data) {
        window.resoluciones = data.feed.entry;
        showresoluciones();
        console.log(data);
    });

    window.showresoluciones = function(){
        var showData = $('#show-data');

        var html = '';
        $.each( resoluciones, function( key, item ) {
            html += '<tr>';
            html += ' <td class="nrodef">'+ item.gsx$nrodef.$t + '</td>';
            html += ' <td class="altafecha">'+ item.gsx$altafecha.$t + '</td>';
            html += ' <td class="titulo">'+ item.gsx$tema.$t + '</td>';
            html += ' <td class="link">'+ item.gsx$link.$t + '</td>';           
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'nro', 'titulo', 'fecha' ] };
        var resolucionesList = new List('resoluciones', listOptions);
    }


});
})(jQuery);


