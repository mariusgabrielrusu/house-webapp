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
          $("#login-form").dialog("close");
        }
      });
    });
  },
  "render" : function(){
    this.loginView.makeDialog();
  }
};
var loginCtrl = new Controller_Login();
// var loginCtrl = new Controller_Login();
// $(document).on('click', '#loginButton', function() {
//   siteRouter.navigate("index/login");
// });
siteRouter.on("route:login", function() {
  loginCtrl.render();
});