(function ($) {
	$.fn.BlackAndWhite = function (feature) {
		if (typeof feature === 'string') {
			switch (feature) {
				case 'off': $(this).css('filter', 'none');
					return;
				case 'on': $(this).css('filter', 'grayscale(100%)');
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
	$('#bwWrapper').BlackAndWhite();
	$('#bwWrapper').BlackAndWhite('off');
	$('#bwWrapper').BlackAndWhite('on');
	$('#bwWrapper').BlackAndWhite(0);
	$('#bwWrapper').BlackAndWhite(20);
	$('#bwWrapper').BlackAndWhite(40);
	$('#bwWrapper').BlackAndWhite(60);
	$('#bwWrapper').BlackAndWhite(80);
	$('#bwWrapper').BlackAndWhite(100);
});