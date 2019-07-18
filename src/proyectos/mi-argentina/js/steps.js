

/* global window, location, document */

// document.addEventListener('DOMContentLoaded', function () {
// 	var cache = {}, last;

// 	Array.prototype.forEach.call(document.querySelectorAll('[role="tablist"]'), function (tablist) {
// 		Array.prototype.forEach.call(tablist.querySelectorAll('[href^="#"][role="tab"]'), function (tab, index, tabs) {
// 			cache[tab.hash] = [tab, document.getElementById(tab.getAttribute('aria-controls'))];

// 			if (tab.getAttribute('aria-selected') === 'true') {
// 				last = cache[''] = cache[tab.hash];
// 			} else {
// 				tab.setAttribute('tabindex', -1);
// 			}

// 			tab.addEventListener('keydown', function (event) {
// 				var next = event.keyCode === 37 ? tabs[index - 1] : event.keyCode === 39 ? tabs[index + 1] : null;

// 				if (next) {
// 					location.hash = next.hash;

// 					next.focus();
// 				}
// 			});
// 		});
// 	});

// 	window.addEventListener('hashchange', onhashchange);

// 	onhashchange();

// 	function onhashchange() {
// 		var tab = cache[location.hash];

// 		if (tab) {
// 			if (last) {
// 				last[0].removeAttribute('aria-selected');
// 				last[0].setAttribute('tabindex', -1);
// 				last[1].setAttribute('hidden', '');
// 			}

// 			tab[0].setAttribute('aria-selected', 'true');
// 			tab[0].removeAttribute('tabindex');
// 			tab[1].removeAttribute('hidden', '');

// 			last = tab;
// 		}
// 	}
// });

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