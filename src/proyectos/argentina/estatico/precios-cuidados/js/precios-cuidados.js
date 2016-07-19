$(document).ready(function () {

    var showData = $('#show-data');

    $.getJSON('js/productos.json', function (data) {
        console.log(data);

        var productos = data.productos.map(function (producto) {

            var html = '';
            html += '<tr>';
            html += ' <th scope="row">&nbsp;&nbsp;';
            html += '   <a data-toggle="collapse" href="#'+ producto.id + '">';
            html += '     <i class="fa fa-plus text-success" aria-hidden="true"></i>';
            html += '   </a>';
            html += ' </th>';
            html += ' <td>';
            html += '   <div class="nombre">'+ producto.name + '</div>';
            html += '   <div class="collapse" id="'+ producto.id + '">';
            html += '     <div><strong>Categor&iacute;a: </strong><span class="categoria">'+ producto.categoria + '</span></div>';
            html += '     <div><strong>EAN: </strong><span class="ean">'+ producto.ean + '</span></div>';
            html += '   </div>';
            html += ' </td>';
            html += ' <td class="marca">'+ producto.marca + '</td>';
            html += ' <td class="medida td-strong">'+ producto.cantidad + '</td>';
            html += ' <td class="precio td-strong text-success">'+ producto.precioAMBA + '</td>';
            html += '</tr>';
            return html;

        });

        showData.empty();

        if (productos.length) {
          var content = productos.join();
          showData.append(content);
        }

        var listOptions = {valueNames: [ 'nombre', 'marca', 'medida', 'precio', 'categoria', 'ean' ] };
        var productsList = new List('productos', listOptions);
    });

    //cambiando clase de icons en tablas
    $('body').on('click', '.list a', function(){
        $(this).find('i').toggleClass('fa-plus fa-minus'); 
        $(this).find('i').toggleClass('text-success text-danger'); 
    });

});




     
