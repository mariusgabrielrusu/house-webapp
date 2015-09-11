var SignupEntity = function() {};

SignupEntity.prototype = {
	"s_userID" : null,
	"s_email" : null,
	"s_password" : null,
	"init" : function() {
		this.s_userID = $("#s_userID").val();
		this.s_email = $("#s_email").val();
		this.s_password = $("#s_password").val();
	},
	"validate" : function(callback) {
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
			},
			"error" : function() {
				callback(false);
			}
		});
	}
};
