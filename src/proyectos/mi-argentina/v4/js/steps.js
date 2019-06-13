$(document).ready(function () {
	//Initialize tooltips
	$('.nav-tabs > li a[title]').tooltip();
	
	//Wizard
	$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

		var target = $(e.target);
	
		if (target.parent().hasClass('disabled')) {
			return false;
		}
	});

	$(".next-step").click(function (e) {

		var active = $('.wizard-head .nav-tabs li.active');
		var miact = $('.tab-content .mobile-step.activo');
		active.next().removeClass('disabled');
		miact.removeClass('activo');
		miact.next().next().addClass('activo').removeClass('disabled');
		
		nextTab(active);

	});
	$(".prev-step").click(function (e) {

		var active = $('.wizard-head .nav-tabs li.active');
		var miact = $('.tab-content .mobile-step.activo');

		
		miact.removeClass('activo');
		miact.prev().prev().addClass('activo');
		miact.next().next().removeClass('activo');

		prevTab(active);

	});
	$(".mobile-step > a").click(function(e){
		$(".mobile-step").removeClass('activo');
		$(this).parent().addClass('activo');
		e.preventDefault();
		var link = $(this).attr('href');
		$(".nav-tabs a[href='"+link+"']").trigger("click");
	});
});

function nextTab(elem) {
	$(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
	$(elem).prev().find('a[data-toggle="tab"]').click();
}