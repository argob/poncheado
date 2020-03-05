(function($){     

    function ponchoTable(idSpread,hojaNumero,tituloTabla){
      var listado = [];
      var filteredTitle = [];
      var filteredTitleGsx = [];
      var titulos = '';
      var th = [];
      var lista = '';      
      var centeredContent ='';
      if ( $.fn.DataTable.isDataTable('#ponchoTable') ) {
        $('#ponchoTable').DataTable().destroy();
      }

      jQuery.getJSON('https://spreadsheets.google.com/feeds/list/'+idSpread+'/'+hojaNumero+'/public/values?alt=json',

        function(data) {
            listado = data['feed']['entry'];

            //TITULOS
            $.each(Object.keys(listado[0]), function(index, key) {
                if (key.substr(0, 4) == 'gsx$') {
                    filteredTitle.push(listado[0][key]["$t"]);
                    filteredTitleGsx.push(key);
                    titulos += '<th>' + listado[0][key]["$t"] + '</th>';
                    th.push(listado[0][key]["$t"]);
                   

                }
              
            })

            //Caption de la tabla
            $("#ponchoTable caption").html(tituloTabla);

            //Agregar titulos al thead de la tabla
            $('#ponchoTable thead tr').empty();
            $('#ponchoTable thead tr').append(titulos);


            //CONTENIDO FILAS
            $.each(listado, function(row, value) {
                
                if(row > 0){
                lista += '<tr>';
                  $.each(filteredTitleGsx, function(index, title) {
                    var tdEmpty = '';
                      if (title.substr(0, 4) == 'gsx$') {
                         
                          filas = listado[row][filteredTitleGsx[index]].$t;


                          //Guardar título de referencia de cada fila
                          if(title == filteredTitleGsx[0]){
                              labelBtn = filas;
                            }
                          
                          //Detectar si es botón
                          if(title.includes("btn-") && filas != "" ){
                            nameBtn = title.substr(8, title.length-8).replace("-"," ");
                            filas = '<a aria-label="' + nameBtn + " " + labelBtn + '" class="btn btn-primary btn-sm margin-btn" target="_blank" href="'+filas+'">'+nameBtn+'</a>'
                            
                          }


                          if(filas == ''){
                            tdEmpty = 'hidden-xs';
                          }

                          var converter = new showdown.Converter(),
                          filas = converter.makeHtml(filas);

                          lista += '<td class="'+ tdEmpty + '" data-title="'+ th[index] +'">' + filas + '</td>';

                      }

                     
                  })
                lista += '</tr>';
                }

            })

            //Agregar contenido al body de la Tabla
            $('#ponchoTable tbody').empty();
            $('#ponchoTable tbody').append(lista);

            initDataTable();
        }
    )

    /*function formatTitle(keyFiltered) {
        var titleLowerCase = keyFiltered.substr(4, keyFiltered.length - 4);
        return titleLowerCase[0].toUpperCase() + titleLowerCase.slice(1);
    }*/

    function initDataTable() {
        var tabla = $("#ponchoTable").DataTable({
          

            "lengthChange": false,
            "autoWidth" : false,
            "dom": "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                   "<'row'<'col-sm-12'i>>" +
                   "<'row'<'col-sm-12'tr>>" +
                   "<'row'<'col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'p>>",
             "language": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "_TOTAL_ resultados",
                "sInfoEmpty": "No hay resultados",
                //"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoFiltered": "",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",

                "oPaginate": {
                    "sFirst": "<<",
                    "sLast": ">>",
                    "sNext": ">",
                    "sPrevious": "<"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente",
                    "paginate": {
                        "first": 'Ir a la primera página',
                        "previous": 'Ir a la página anterior',
                        "next": 'Ir a la página siguiente',
                        "last": 'Ir a la última página'
                    }
                }
                 
            }
        });


        //BUSCADOR
        $("#ponchoTable_filter").parent().parent().remove();
        $('#ponchoTableSearch').on('keyup', function() {
            tabla.search(this.value).draw();
        });






    }
  }


ponchoTable(idSpread,hojaNumero,tituloTabla);

}(jQuery));