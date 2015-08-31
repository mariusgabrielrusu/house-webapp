var FormView = function() {};

FormView.prototype = {
	"init" : function() {
		throw "This should be implement in child classes.";
	},
	"makeDialog" : function() {
		throw "This should be implement in child classes.";
	}
}
