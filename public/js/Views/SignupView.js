"use strict";
var SignupView = FormView.extend({
	"el" : "#signup-form",
	makeDialog : function() {
		this.$el.on("submit", function(e) {
			e.preventDefault();
			$(document).trigger("signupSubmit");
		})
		this.$el.dialog({
			modal: true,
			draggable: false,
			resizable: false,
			buttons: {
				"Înscrie-te" : function() {
					$(document).trigger("signupSubmit");
				},
				"Anulează" : function() {
					$(document).trigger("close");
					$("#signup-form").dialog("close");
				}
			}
		});
	}
});