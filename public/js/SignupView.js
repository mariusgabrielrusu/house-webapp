var SignupView = function() {};

SignupView.prototype = new FormView();
SignupView.prototype.constructor = SignupView;

SignupView.prototype = {
	"init" : function() {
		$("#signupButton").on("click", function() {
			$(document).trigger("signupClick");
		})
	},
	"makeDialog" : function() {
		$("#signup-form").dialog({
			modal: true,
			draggable: false,
			resizable: false,
			buttons: {
				"Înscrie-te" : function() {
					$(document).trigger("signupSubmit");
				},
				"Anulează" : function() {
					$("#signup-form").dialog("close");
				}
			}
		});
	}
};
