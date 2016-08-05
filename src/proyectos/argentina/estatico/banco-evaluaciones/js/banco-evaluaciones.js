(function($) {
$(document).ready(function () {

    $.getJSON('https://spreadsheets.google.com/feeds/list/1VUPQE5KJSP1uug_GlV7NnN2O98INKN5cuz7I0wrfBgk/1/public/values?alt=json', function (data) {
        window.evaluaciones = data.feed.entry;
        showEvaluaciones();
        console.log(data);
    });

    window.showEvaluaciones = function(){
        var showData = $('#show-data');

        var html = '';
        $.each( evaluaciones, function( key, item ) {
            //console.log("testeo"+item.gsx$ean.$t);
            html += '<tr>';
            html += ' <td class="organismo">'+ item.gsx$organismo.$t + '</td>';
            html += ' <td class="titulo"> <h6>'+ item.gsx$titulo.$t + '</h6><p>'+ item.gsx$programa.$t + '</p><small>'+ item.gsx$evaluacion.$t + '</small></td>';
            html += ' <td class="tema">'+ item.gsx$tema.$t + '</td>';
            html += ' <td class="ano">'+ item.gsx$ano.$t + '</td>';
            html += ' <td class="fichatecnica"> <a target="_blank" href="'+ item.gsx$fichatecnica.$t + '" class="btn btn-primary btn-sm"><i class="fa fa-download"></i> </a></td>';
            html += ' <td class="evaluacion_2"><a target="_blank" href="'+ item.gsx$evaluacion_2.$t + '" class="btn btn-primary btn-sm"><i class="fa fa-download"></i> </a></td>';
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'organismo', 'tema', 'ano' ] };
        var evaluacionesList = new List('evaluaciones', listOptions);
    }


});
})(jQuery);




     
