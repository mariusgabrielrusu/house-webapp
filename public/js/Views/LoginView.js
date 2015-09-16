var LoginView = FormView.extend({
	"dialogVisible" : false,
	"el" : "#login-form",
	makeDialog : function() {
		if(this.dialogVisible){
			return;
		}
		this.$el.on("submit", function(e) {
			e.preventDefault();
			$(document).trigger("loginSubmit");
		})
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