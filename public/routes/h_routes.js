var RouterHouse = Backbone.Router.extend({
  "routes": {
    "" : "index",
    "login" : "login",
    "signup" : "signup"
  }
});

var siteRouter = new RouterHouse();
