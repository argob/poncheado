(function($) {
$(document).ready(function () {

    $.getJSON('https://interfaces.argentina.gob.ar/api/public/v1.0/inap/1E_rt12UyCj-VzZPck__XUfEwK03q9Cg7yOE_tRpO2Qg/1', function (data) {
        window.veteranos = data.feed.entry;
        showveteranos();
        console.log(data);
    });

    window.showveteranos = function(){
        var showData = $('#show-data');

        var html = '';
        $.each( veteranos, function( key, item ) {
            html += '<tr>';
            html += ' <td class="apellido">'+ item.gsx$apellido.$t + '</td>';
            html += ' <td class="nombre">'+ item.gsx$nombre.$t + '</td>';
            html += ' <td class="dni">'+ item.gsx$dni.$t + '</td>';
            html += ' <td class="idgrado">'+ item.gsx$idgrado.$t + '</td>';           
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'apellido', 'nombre', 'dni' ] };
        var veteranosList = new List('veteranos', listOptions);
    }


});
})(jQuery);


