$(document).ready(function () {
	//Inicia tooltips
	$('.nav-tabs > li a[title]').tooltip();
	//pasos wizard
	$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
		var target = $(e.target);
			if (target.parent().hasClass('disabled')) {
			return false;
		}
	});
	// click en boton siguiente paso
	$(".next-step").click(function (e) {
		var active = $('.wizard-head .nav-tabs li.active');
		active.next().removeClass('disabled');
		nextTab(active);
	});
	// click en boton anterior
	$(".prev-step").click(function (e) {
		var active = $('.wizard-head .nav-tabs li.active');		
		prevTab(active);
	});
});
// Simula clic en siguiente tab
function nextTab(elem) {
	$(elem).next().find('a[data-toggle="tab"]').click();
}
// Simula clic en el tab anterior
function prevTab(elem) {
	$(elem).prev().find('a[data-toggle="tab"]').click();
}