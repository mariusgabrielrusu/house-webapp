var Validation = function() {};

Validation.prototype = {
	"validator" : {
		"mandatory" : function(val) {
			if(val === "") {
				return false;
			}
			return true;
		},
		"alphaNum" : function(val) {
			if(this.mandatory(val) === false) {
				return true;
			}

			var alphaNumReg = /^[a-zA-Z0-9_-]{3,16}$/;
			if(val.match(alphaNumReg)) {
				return true;
			}
			return false;
		},
		"email" : function(val) {
			if(this.mandatory(val) === false) {
				return true;
			}

			var emailReg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
			if(val.match(emailReg)) {
				return true;
			}
			return false;
		},
		"password" : function(val) {
			if(this.mandatory(val) === false) {
				return true;
			}

			var passwordReg = /^[a-zA-Z0-9_-]{6,18}$/;
			if(val.match(passwordReg)) {
				return true;
			}
			return false;
		}
	},
	"errorMsg" : {
		"mandatory" : "Campul este obligatoriu!",
		"alphaNum" : "Campul este invalid!",
		"email" : "Campul email este invalid!",
		"password" : "Parola trebuie sa aiba intre 6 si 18 caractere."
	}
};

var validation = new Validation();
if(typeof exports !== "undefined"){
	exports.Validation = validation;
}
