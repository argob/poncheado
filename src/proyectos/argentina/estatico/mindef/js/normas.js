(function($) {
$(document).ready(function () {

    $.getJSON('https://interfaces.argentina.gob.ar/api/public/v1.0/inap/11dJivX0gKj6HxzOowPwu0KxFYFRfRma9eYAams0dVQ8/1', function (data) {
        window.normas = data.feed.entry;
        shownormas();
        console.log(data);
    });

    window.shownormas = function(){
        var showData = $('#show-data');

        var html = '';
        $.each( normas, function( key, item ) {
            html += '<tr>';
            html += ' <td class="nro">'+ item.gsx$nom1.$t + item.gsx$nom2.$t + '</td>';
            html += ' <td class="estado">'+ item.gsx$estado.$t + '</td>';
            html += ' <td class="titulo">'+ item.gsx$titulo.$t + '</td>';
            html += ' <td class="areatema">'+ item.gsx$areatema.$t + '</td>';
            html += ' <td class="cna">'+ item.gsx$cna.$t + '</td>';
            html += ' <td class="fecha">'+ item.gsx$mes.$t + '/' + item.gsx$anio.$t + '</td>';
            html += ' <td class="accion">'+ item.gsx$link.$t + '</td>';
            
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'nro', 'titulo', 'estado' ] };
        var normasList = new List('normas', listOptions);
    }


});
})(jQuery);


