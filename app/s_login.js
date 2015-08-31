var mysql = require('mysql');

var LoginEntity = function(){};

LoginEntity.prototype = {
	"uid" : null,
	"password" : null,
	"checkValidity" : function(callback) {
		var _this = this;
		//check the user password here
		var connection = mysql.createConnection ({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'house'
        });
		connection.connect();

		var uidSQL = 'SELECT * FROM users WHERE uid= ?';
		var uidInserts = [_this.uid];
		uidSQL = mysql.format(uidSQL, uidInserts);
		connection.query(uidSQL, function(uErr, uRows, uFields){
			var errParams = {
				"errors" : []
			};
			if(uRows.length !== 0) {
				if(_this.uid === uRows[0].uid) {
					if(_this.password === uRows[0].password) {
						//success

					} else {
						errParams.errors.push("Userul este corect, parola nu este.");
					}
				} else {
					errParams.errors.push("Nu s-a găsit utilizatorul.");
				}
			} else {
				errParams.errors.push("Datele introduse nu sunt bune.");
			}

			 if(typeof callback === "function") {
				 callback(errParams);
			}
		});

		connection.end();
	}
};

var loginEntity = new LoginEntity();

exports.LoginEntity = loginEntity;
