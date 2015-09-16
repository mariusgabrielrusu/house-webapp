"use strict";
var HouseView = View.extend({
    render: function() {
        var method = null;

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        for (var i in this.entity.attributes) {
            method = "set" + capitalize(i);
            if(typeof this[method] === "function"){
                this[method]();
            }
        }
    },
    setDoor: function() {
        if ( parseInt(this.entity.attributes.door) === 1 ) {
            $(".doorView").removeClass("door-closed");
            $(".doorView").addClass("door-open");
        } else {
            $(".doorView").removeClass("door-open");
            $(".doorView").addClass("door-closed");
        }
    },
    setSL: function(param) {
        var color = $("." + param).css("background").split("(");
        color = color[1].split(")");
        color = color[0].split(",");
        color[3] = parseInt(this.entity.attributes[param])/10;
        $("." + param).css("background","rgba(" + color.join(",") + ")");
    },
    setLights: function() {
        this.setSL("lights");
    },
    setSmoke: function() {
        this.setSL("smoke");
    }
});