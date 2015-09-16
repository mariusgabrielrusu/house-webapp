var LoginView = FormView.extend({
	"dialogVisible" : false,
	"el" : "#login-form",
	makeDialog : function() {
		var _this = this;
		if(this.dialogVisible){
			return;
		}
		this.$el.dialog({
			modal: true,
			draggable: false,
			resizable: false,
			buttons: {
				"Intră" : function() {
					$(document).trigger("loginSubmit");
				},
				"Anulează" : function() {
					$(document).trigger("close");
					$("#login-form").dialog("close");
				}
			}
		});
	}
});