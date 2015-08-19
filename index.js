var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
var s_house = require('./app/s_house.js');

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


app.get('/', function(req, res) {
    s_house.house.init(function() {
        res.render('house', {
            "smoke" : s_house.house.smoke,
            "lights" : s_house.house.lights,
            "door" : s_house.house.door
        });
        console.log(s_house.house);
    });
});


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


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address.port;
})
