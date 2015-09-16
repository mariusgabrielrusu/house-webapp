var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
var s_house = require('./app/s_house.js');
var s_login = require('./app/s_login.js');
var s_signup = require('./app/s_signup.js');
// var bcrypt = require('bcrypt-nodejs');
// var hash = bcrypt.hashSync("hmsintern");
// console.log(hash);

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set rendering engines
app.engine('html', mustacheExpress());
app.set('view engine', 'html');

//Setting view pages
app.set('views', __dirname + '/html');
app.use(express.static(__dirname + '/public'));

app.post('/ajax', function(req, res){
  s_house.house.door = req.body.door;
  s_house.house.lights = req.body.lights;
  s_house.house.smoke = req.body.smoke;
  s_house.house.update(function(params) {
      res.send(JSON.stringify ({
        "error" : params.errors
      }));
  });
});

app.get('*', function(req, res) {
    s_house.house.init(function() {
        res.render('house', {
            "smoke" : s_house.house.smoke,
            "lights" : s_house.house.lights,
            "door" : s_house.house.door
        });
    });
});

app.post("/login", function(req, res) {
    s_login.LoginEntity.uid = req.body.userID;
    s_login.LoginEntity.password = req.body.password;
    s_login.LoginEntity.checkValidity(function(params) {
        res.send(JSON.stringify ({
            "error" : params.errors
        })
    );
    });
});

app.post("/signup", function(req, res) {
    var validation = require("./public/js/Validation.js");
    s_signup.SignupEntity.s_uid = req.body.s_userID;
    s_signup.SignupEntity.s_email = req.body.s_email;
    s_signup.SignupEntity.s_password = req.body.s_password;
    //server validation

    if(s_signup.SignupEntity.s_uid !== "" &&
    s_signup.SignupEntity.s_email !== "" &&
    s_signup.SignupEntity.s_password !== "") {
        if(validation.Validation.validator.alphaNum(s_signup.SignupEntity.s_uid) &&
            validation.Validation.validator.email(s_signup.SignupEntity.s_email) &&
            validation.Validation.validator.password(s_signup.SignupEntity.s_password)) {
                //saves the data
                s_signup.SignupEntity.saveData(function(params) {
                    res.send(JSON.stringify({
                        "error" : params.errors
                    })
                );
                });
            } else {
                console.log("Nu fraudula");
            }
    }

});


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address.port;
})
