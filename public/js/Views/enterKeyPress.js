$(function() {
	$("fieldset input").keypress(function (e) {
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			$('span.ui-button-text').click();
			return false;
		} else {
			return true;
		}
	});
});
