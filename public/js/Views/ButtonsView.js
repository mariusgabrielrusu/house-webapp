var ButtonsView = Backbone.View.extend({
  el : ".buttonHolder",
  events : {
    "click #loginButton" : "loginButtonClick",
    "click #signupButton" : "signupButtonClick"
  },
  loginButtonClick : function(e) {
      $(document).trigger("loginClick");
  },
  signupButtonClick : function(e) {
      $(document).trigger("signupClick");
  }
});
