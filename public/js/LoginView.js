var LoginView = FormView.extend({
	"dialogVisible" : false,
	initialize: function() {
		$("#loginButton").on("click", function() {
			$(document).trigger("loginClick");
		})
	},
	makeDialog : function() {
		var _this = this;
		if(this.dialogVisible){
			return;
		}
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
			},
			"open" : function(){
				_this.dialogVisible = true;
			},
			"close" : function(){
				_this.dialogVisible = false;
			},
		});
	}
});