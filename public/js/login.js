var LoginEntity = function() {};

LoginEntity.prototype = {
	"userID" : null,
	"password" : null,
	"init" : function() {
		this.userID = $("#userID").val();
		this.password = $("#password").val();
	},
	"validate" : function(callback) {
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
			},
			"error" : function() {
				callback(false);
			}
		});
	}
};
