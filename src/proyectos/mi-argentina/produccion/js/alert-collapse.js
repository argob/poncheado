
	
		

		$('.collapse').on('hidden.bs.collapse', function () {
			console.log($(this));
			$(this).parents('.panel-default').find('.fa-chevron-down').addClass('collapseGira');
		})


		$('.collapse').on('show.bs.collapse', function () {
			console.log($(this));
			$(this).parents('.panel-default').find('.fa-chevron-down').removeClass('collapseGira');
		})