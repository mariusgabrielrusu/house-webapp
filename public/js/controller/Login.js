var Controller_Login = function() {
	this.init();
};

Controller_Login.prototype = {
	"loginView" : null,
	"loginEntity" : null,
	"init" : function() {
		var _this = this;
		this.loginView = new LoginView();
		this.loginEntity = new LoginEntity();

		$(document).on("loginSubmit", function(event) {
			_this.loginEntity.validate(function(isValid){
				if(isValid.length !== 0) {
					if(!isValid) {
						alert(isValid);
						$("#login-form").dialog("open");
					} else {
						alert(isValid);
						$("#login-form").dialog("open");
					}
				} else {
					siteRouter.navigate("index");
					$("#login-form").dialog("close");
				}
			});

		});
	}
};

$(document).on('click', '#loginButton', function() {
	siteRouter.navigate("login", {trigger: true});
});

siteRouter.on("route:login", function() {
	var loginCtrl = new Controller_Login();
	loginCtrl.loginView.makeDialog();
});