var grado = [];
grado.push (null, "Cabo en Comision", "Cap", "Cbo", "Cbo (Com)", "Cbo 1ro", "Civil", "Cnl", "ex My", "ex sarg", "Grl", "Grl Br", "Grl Div", "Grl Int", "My", "Priv Grado", "Sarg", "Sarg 1ro", "Sarg Ay", "Sold Consc", "Subof My", "Subof My Post Mortem", "Subof Pr", "Subt", "Subt (Com)", "Tcnl", "Tte", "Tte 1ro", "Tte Grl", "Agente Civil", "Aspirante", "Cabo Primero", "Cabo Principal", "Cabo Segundo", "Cantinero", "Capitan De Corbeta", "Capitan De Fragata", "Capitan De Navio", "Civil Davidoff", "Conscripto", "Contraalmirante", "Corresponsal De Guerra", "Estibador", "Guardiamarina", "Marinero Primero", "Marinero Segundo", "Marino Mercante", "Medico", "Suboficial Mayor", "Suboficial Primero", "Suboficial Principal", "Suboficial Segundo", "Teniente De Corbeta", "Teniente De Fragata", "Teniente De Navio", "Vicealmirante", "1er. Teniente", "Alférez", "Brigadier", "Brigadier General", "Brigadier Mayor", "Cabo", "Cabo 1ro.", "Cabo Principal", "Capitán", "Comodoro", "Mayor", "P.Militar Convocado", "P.Seguridad Convocado", "PC - Convocado", "PC - F.A.A.", "Soldado", "Suboficial Auxiliar", "Suboficial Ayudante", "Suboficial Mayor", "Suboficial Principal", "Teniente", "Vicecomodoro", "Cabo", "Cabo Primero", "Comandante", "Comandante General", "Comandante Mayor", "Comandante Principal", "Gendarme", "Primer Alférez", "Sargento", "Sargento Ayudante", "Sargento Primero", "Subalférez", "Suboficial Mayor", "Suboficial Principal", "AI", "AICCAE", "AICCCM", "AICCNA", "AICGAE", "AICGCM", "AICGNA", "AICGOF", "AICGSG", "AMCGAE", "AMCGCM", "AMCGNA", "AMCGSG", "AP", "APCCNA", "APCGAE", "APCGCM", "APCGN", "APCGNA", "APCGOF", "APCGSG", "ASCCSG", "ASCGSG", "AT", "ATCGNA", "ATCGSG", "CI", "CS", "CSCCNA", "MO", "OP", "PC", "PCY6ZH", "PGCGGE", "PMCCTG", "PMCGGE", "PPCCCTG", "PPCGES", "PPCGGE", "PRCGGE", "SP", "SPCGGE");

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
            html += ' <td class="idgrado">'+ grado[item.gsx$idgrado.$t] + '</td>';           
            html += '</tr>';
    
        });

        showData.empty();
        showData.append(html);

        var listOptions = {valueNames: [ 'apellido', 'nombre', 'dni' ] };
        var veteranosList = new List('veteranos', listOptions);
    }


});
})(jQuery);


