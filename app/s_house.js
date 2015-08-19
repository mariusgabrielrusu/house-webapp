var mysql = require('mysql');

var house = {
    "lights" : null,
    "smoke" : null,
    "door" : null,
    "init" : function(callback) {
        var _this = this;
        var connection = mysql.createConnection ({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'house'
        });
        connection.connect();

        connection.query('SELECT * FROM house_values',
        function(err, rows, fields){
            if(!err) {
                _this.lights = rows[0].lights;
                _this.smoke = rows[0].smoke;
                _this.door = rows[0].door;
                if(typeof callback === "function") {
                    callback();
                }
                } else {
                    console.log('Error while performing query');
                }
            connection.end();
        });
    },
    "update" : function(callback) {
        var _this = this;
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'house'
        });

        connection.connect();

        var sql = "UPDATE house_values SET door= ? , lights= ? , smoke= ? where id=?;";
        var inserts = [_this.door, _this.lights, _this.smoke, 1];
        sql = mysql.format(sql, inserts);
        connection.query(sql, function(err, rows, fields) {
            var params = {
                "errors" : []
            };
            if(err) {
                params.errors.push("S-a petrecut o eroare.");
            }

            if(typeof callback === "function") {
                callback(params);
            }
        });

        connection.end();
    }
}

exports.house = house;
