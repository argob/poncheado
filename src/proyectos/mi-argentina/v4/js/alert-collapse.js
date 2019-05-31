
	
		

		$('.collapse').on('hidden.bs.collapse', function () {
			
			$(this).parents('.panel-default').find('.fa-chevron-up').addClass('collapseGira');
		})


		$('.collapse').on('show.bs.collapse', function () {
		
			$(this).parents('.panel-default').find('.fa-chevron-up').removeClass('collapseGira');
		})