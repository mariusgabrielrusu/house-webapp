var UserEntity = Backbone.Model.extend({
  "userID" : null,
  "password" : null,
  "s_userID" : null,
  "s_email" : null,
  "s_password" : null,
  "initialize" : function () {
    this.userID = $("#userID").val();
    this.password = $("#password").val();
    this.s_userID = $("#s_userID").val();
    this.s_email = $("#s_email").val();
    this.s_password = $("#s_password").val();
  },
  "validateLogin" : function (callback) {
    var _this = this;
    $.ajax({
      "url" : "/login",
      "type" : "post",
      "dataType" : "json",
      "data" : {
        "userID" : _this.userID,
        "password" : _this.password
      },
      "success": function(data) {
        callback(data.error);
        if (!data.error.length) {
          $(document).trigger("close");
        }
      },
      "error" : function() {
        callback(false);
      }
    });
  },
  "validateSignup" : function(callback) {
    var _this = this;
    $.ajax({
      "url" : "/signup",
      "type" : "post",
      "dataType" : "json",
      "data" : {
        "s_userID" : _this.s_userID,
        "s_email" : _this.s_email,
        "s_password" : _this.s_password
      },
      "success": function(data) {
        callback(data.error);
        if (!data.error.length) {
          $(document).trigger("close");
        }
      },
      "error" : function() {
        callback(false);
      }
    });
  }
})