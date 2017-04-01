(function ($) {
	$.fn.blackAndWhite = function (feature, prop, duration) {
		if (typeof feature === 'string') {
			switch (feature) {
				case 'off': $(this).css('filter', 'none');
					return;
				case 'on': $(this).css('filter', 'grayscale(100%)');
					return;
				case 'properties':
					if (typeof prop === 'undefined') {
						return $(this).get(0).prop;
					}
					else {
						$(this).get(0).prop = prop;
						$(this).animate(prop, duration);
					}
					return;
				default: return;
			}
		}
		if (!isNaN(parseFloat(feature)) && isFinite(feature)) {
			$(this).css('filter', 'grayscale(' + feature + '%)');
			return;
		}
		$(this).css('filter', 'grayscale(100%)');
	}
}( jQuery ));

$(document).ready(function() {
	$('#bwWrapper').blackAndWhite();
	$('#bwWrapper').blackAndWhite('off');
	$('#bwWrapper').blackAndWhite('on');
	$('#bwWrapper').blackAndWhite(0);
	$('#bwWrapper').blackAndWhite(20);
	$('#bwWrapper').blackAndWhite(40);
	$('#bwWrapper').blackAndWhite(60);
	$('#bwWrapper').blackAndWhite(80);
	$('#bwWrapper').blackAndWhite(100);
	$('button').blackAndWhite('properties', {width: '200px'});
	$('button').blackAndWhite('properties');
	$('img').blackAndWhite('properties', {height: "150px", width: "150px"}, 5000);
	$('img').blackAndWhite('properties');
	$('p').blackAndWhite('properties', {'font-size': "20px"}, 4000);
	$('p').blackAndWhite('properties');
});