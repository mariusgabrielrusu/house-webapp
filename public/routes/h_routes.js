var RouterHouse = Backbone.Router.extend({
	"routes": {
		"" : "index",
		"bubu" : "index",
		"login" : "login",
		"signup" : "signup"
	}

});

var siteRouter = new RouterHouse();
