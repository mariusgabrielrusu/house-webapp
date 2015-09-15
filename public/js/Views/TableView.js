var Table = View.extend({
	render: function() {
		var _this = this;
	    for (var i in _this.entity) {
	        if (typeof i !== "function") {
	            $(".table_" + i).text(_this.entity[i]);
	        }
	    }		
	}
});