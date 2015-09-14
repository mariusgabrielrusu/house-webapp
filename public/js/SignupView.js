"use strict";
var SignupView = FormView.extend({
	makeDialog : function() {
		$("#signup-form").dialog({
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