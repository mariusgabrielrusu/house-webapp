var LoaderView = View.extend({
	"el": '.loader',
	createLoader : function() {
		loaderDiv = document.createElement("div");
		loaderImg = document.createElement("img");
		loaderDiv.setAttribute("class", "loader");
		loaderImg.setAttribute("src", "img/ajax-loader.gif");
		loaderDiv.appendChild(loaderImg);
		$("body").append(loaderDiv);

		this.$el = loaderDiv;
	},
	render: function() {
		$(".loader > img").css("display", "block");
		$(".loader").css({
			"background-color": "rgba(0,0,0,0.5)",
			"height" : "100%" ,
			"width": "100%",
			"cursor" : "not-allowed"
		});
	},
	// destroy: function() {
	// 	$(".loader > img").css("display", "none");
	// 	$(".loader").css({
	// 		"background-color": "",
	// 		"height" : "" ,
	// 		"width": "",
	// 		"cursor" : ""
	// 	});
	// }
})