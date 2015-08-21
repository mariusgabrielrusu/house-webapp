function LoaderView() {};
LoaderView.prototype = new View();
LoaderView.prototype.constructor = LoaderView;

LoaderView.prototype.render = function() {
	$(".loader > img").css("display", "block");
	$(".loader").css({
		"background-color": "rgba(0,0,0,0.5)",
		"height" : "100%" ,
		"width": "100%",
		"cursor" : "not-allowed"
	});
}

LoaderView.prototype.destroy = function() {
	$(".loader > img").css("display", "none");
	$(".loader").css({
		"background-color": "",
		"height" : "" ,
		"width": "",
		"cursor" : ""
	});
}
