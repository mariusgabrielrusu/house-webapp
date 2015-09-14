var LoginView = FormView.extend({
	initialize: function() {
		$("#loginButton").on("click", function() {
			$(document).trigger("loginClick");
		})
	},
	makeDialog : function() {
		$("#login-form").dialog({
			modal: true,
			draggable: false,
			resizable: false,
			buttons: {
				"Intră" : function() {
					$(document).trigger("loginSubmit");
				},
				"Anulează" : function() {
					siteRouter.navigate("index");
					$("#login-form").dialog("close");
				}
			}
		});
	}
});