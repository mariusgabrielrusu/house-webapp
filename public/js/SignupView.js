"use strict";
var SignupView = FormView.extend({
	initialize: function () {
		$("#signupButton").on("click", function() {
			$(document).trigger("signupClick");
		})
	},
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
					$("#signup-form").dialog("close");
				}
			}
		});
	}
});