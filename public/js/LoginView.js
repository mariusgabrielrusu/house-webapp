var LoginView = function() {};

LoginView.prototype = new FormView();
LoginView.prototype.constructor = LoginView;

LoginView.prototype = {
	"init" : function() {
		$("#loginButton").on("click", function() {
			$(document).trigger("loginClick");
		})
	},
	"makeDialog" : function() {
		$("#login-form").dialog({
			modal: true,
			draggable: false,
			resizable: false,
			buttons: {
				"Intră" : function() {
					$(document).trigger("loginSubmit");
				},
				"Anulează" : function() {
					$("#login-form").dialog("close");
				}
			}
		});
	}
};
