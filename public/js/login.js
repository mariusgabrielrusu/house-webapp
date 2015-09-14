var LoginEntity = Backbone.Model.extend({
	"userID" : null,
	"password" : null,
	"initialize" : function () {
		this.userID = $("#userID").val();
		this.password = $("#password").val();
	},
	"validate" : function (callback) {
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
	}
});