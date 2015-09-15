var ButtonsView = Backbone.View.extend({
	initialize: function() {
		$("#loginButton").on("click", function() {
			$(document).trigger("loginClick");
		});

		$("#signupButton").on("click", function() {
			$(document).trigger("signupClick");
		});
	}
});
