(function($){
	$.fn.tableMobile=function(){
	    setTimeout(function() {
	      $('table').addClass('table-mobile');
	      var texto = [];
	      $("table th").each( function(index, value){
	        texto.push($(this).text());
	        $("table tr td").each( function(indice, value){
	          $('table tr:eq('+indice+') td:eq('+index+')').append('<span class="td-label">'+ texto[index] +'</span>');
	        })
	      })
	    }, 1000);
	return this;
	};
})(jQuery);