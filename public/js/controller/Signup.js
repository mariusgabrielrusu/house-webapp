var Controller_Signup = function() {
	this.init();
};

Controller_Signup.prototype = {
	"signupView" : null,
	"userEntity" : null,
	"validation" : null,
	"init" : function() {
		var _this = this;
		this.signupView = new SignupView();

		$(document).on("signupClick", function(event) {
			_this.signupView.makeDialog();
		});

		$(document).on("signupSubmit", function(event) {
			_this.userEntity = new UserEntity();
			if(_this.userEntity.s_userID !== "" &&
			_this.userEntity.s_email !== "" &&
			_this.userEntity.s_password !== "") {

				_this.userEntity.validateSignup(function(isValid) {
					if(isValid.length !== 0) {
						$("#signup-form").dialog("open");
					} else {
						$("#signup-form").dialog("close");
					}
				});

			} else {
				alert("Va rugam completati toate campurile.");
			}
		});

		$(".form-signup").find(":input").on("change", function(e) {
			e.preventDefault();
			var elements = ($(this).attr("data-validation")).split(",");
			var val = $(this).val();

			for(var i in elements) {
				if(typeof validation.validator[elements[i]] === "function") {
					if(validation.validator[elements[i]](val) === false) {
						//show error
						$(this).removeClass();
						$(this).tooltip({
							content: validation.errorMsg[elements[i]],
							position: {
								my: "left top",
								at: "right+5 top-5"
							}
						});
						$(this).addClass("errorMessage");
					} else {
						//show success
						$(this).tooltip({
							content: ""
						});
						$(this).removeClass();
						$(this).addClass("successMessage");
					}
				}
			}
		});
		$(document).on('click', '.ui-dialog-titlebar-close', function(e) {
      siteRouter.navigate("", {trigger: true});
    });
	},
	"render" : function() {
		this.signupView.makeDialog();
	}
};

var signupCtrl = new Controller_Signup();
siteRouter.on("route:signup", function() {
  signupCtrl.render();
});
