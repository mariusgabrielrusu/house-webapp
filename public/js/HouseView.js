//  Constructor; sa fie mai eficient, pastrez $(".house").find('*')
//  in variabila "elements"; acel find('*') ia toti copiii si nepotii div-ului house
function HouseView(){};
HouseView.prototype = new View();
HouseView.prototype.constructor = HouseView;
HouseView.prototype.render = function(){
    "use strict";
    var method = null;
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    for (var i in this.entity) {
        method = "set" + capitalize(i);
        if(typeof this[method] === "function"){
            this[method]();
        }
    }
};

HouseView.prototype.setDoor = function() {
    "use strict";
    if ( parseInt(this.entity["door"]) === 1 ) {
        $(".doorView").removeClass("door-closed");
        $(".doorView").addClass("door-open");
    } else {
        $(".doorView").removeClass("door-open");
        $(".doorView").addClass("door-closed");
    }
};

HouseView.prototype.setSL = function(param) {
    var color = $("." + param).css("background").split("(");
    color = color[1].split(")");
    color = color[0].split(",");
    color[3] = parseInt(this.entity[param])/10;
    $("." + param).css("background","rgba(" + color.join(",") + ")");
}

HouseView.prototype.setLights = function() {
    this.setSL("lights");
}

HouseView.prototype.setSmoke = function() {
    this.setSL("smoke");
}
