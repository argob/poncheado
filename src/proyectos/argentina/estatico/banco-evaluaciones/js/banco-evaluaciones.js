(function($) {
$(document).ready(function () {

    // $.getJSON('https://spreadsheets.google.com/feeds/list/1VUPQE5KJSP1uug_GlV7NnN2O98INKN5cuz7I0wrfBgk/1/public/values?alt=json', function (data) {
    $.getJSON('data_bancos.txt', function (data) {
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
            html += ' <td class="titulo"> <h6>'+ item.gsx$titulo.$t + '</h6><p class="margin-0">'+ item.gsx$programa.$t + '</p><p><small>' + 'Evaluación: ' + item.gsx$evaluacion.$t + '</small></p><p class="margin-0"><a target="_blank" href="'+ item.gsx$fichatecnica.$t + '" class="btn btn-primary btn-sm"><i class="fa fa-download"></i> Ficha Técnica </a>&nbsp;&nbsp<a target="_blank" href="'+ item.gsx$evaluacion_2.$t + '" class="btn btn-primary btn-sm"><i class="fa fa-download"></i> Evaluación</a></p></td>';
            html += ' <td class="organismo">'+ item.gsx$organismo.$t + '</td>';
            html += ' <td class="tema">'+ item.gsx$tema.$t + '</td>';
            html += ' <td class="ano">'+ item.gsx$ano.$t + '</td>';
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'organismo', 'tema', 'ano' ] };
        var evaluacionesList = new List('evaluaciones', listOptions);
    }


});
})(jQuery);




     
