$(document).ready(function() {
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

			$(this).css('filter', 'grayscale(100%)');
		}
	}( jQuery ));

	$('#bwWrapper').BlackAndWhite();
	$('#bwWrapper').BlackAndWhite('off');
	$('#bwWrapper').BlackAndWhite('on');
});