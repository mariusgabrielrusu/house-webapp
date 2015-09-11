var mysql = require('mysql');

var SignupEntity = function() {};

SignupEntity.prototype = {
	"s_uid" : null,
	"s_email" : null,
	"s_password" : null,
	"saveData" : function(callback) {
		//server validation here
		var _this = this;

		var connection = mysql.createConnection ({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'house'
		});

		connection.connect();

		var sql = 'INSERT INTO users (uid, password, email) values (?,?,?);';
		var inserts = [_this.s_uid, _this.s_password, _this.s_email];
		sql = mysql.format(sql, inserts);
		connection.query(sql, function(err, rows, fields) {
			var params = {
				"errors" : []
			};

			if(err !== null) {
				params.errors.push("S-a petrecut o eroare la adaugarea utilizatorului.");
			}
			if(typeof callback === "function") {
				callback(params);
			}
			connection.end();
		});

	}
}

var signupEntity = new SignupEntity();

exports.SignupEntity = signupEntity;
