var RouterHouse = Backbone.Router.extend({
	"routes": {
		"" : "index",
		"index" : "index",
		"login" : "login",
		"signup" : "signup"
	}

});

var siteRouter = new RouterHouse();
