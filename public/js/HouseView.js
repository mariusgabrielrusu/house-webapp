//  Constructor; sa fie mai eficient, pastrez $(".house").find('*')
//  in variabila "elements"; acel find('*') ia toti copiii si nepotii div-ului house
function HouseView(){
    this.elements = $(".house").find('*');
};
HouseView.prototype = new View();
HouseView.prototype.constructor = HouseView;
HouseView.prototype.elements = null;
HouseView.prototype.render = function(){
    "use strict";
    var _this = this;
    this.elements.each(function(k, v) {
        if ($(v).attr("name") !== undefined) {
            //  Iau numele div-ului curent si-l pun in variabila name
            var name = $(v).attr("name");
            //  Ma uit daca numele contine un nume din entitatea house
            //  gen lights, smoke (vezi html, numele mai contin si alte chestii)
            for (var i in _this.entity) {
                if (name.includes(i)) {
                    name = i;
                }
            }

            //  Daca-i usa, sa se deschida/inchida
            if (name === "door") {
                if (_this.entity["door"] === "1" ) {
                    $(v).removeClass("door-closed");
                    $(v).addClass("door-open");
                } else {
                    $(v).removeClass("door-open");
                    $(v).addClass("door-closed");
                }
            } else {
                //  Altfel, e lumina sau fum, iar ambele au in comun faptul ca
                //  isi schimba opacitatea
                var color = $(v).css("background").split("(");
                color = color[1].split(")");
                color = color[0].split(",");
                color[3] = parseInt(_this.entity[name])/10;
                $(v).css("background","rgba(" + color.join(",") + ")");
            }
        }
    });
}
