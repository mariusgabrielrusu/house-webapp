"use strict";
var ControlPanelView = View.extend({
    "el" : ".control-panel",
    //  Aka ControlPanelView extends View
    //  Trebuie mentionat constructorul (by default, ar fi fost View)

    //  Astea 3 linii de cod sunt cele care construiesc clasa
    "events" : {
        "change :input" : "setActions"
    },
    setActions: function(e) {
        //  Chestiile care vor fi modificate in "house"
        //  Am pus numele cu "update" pentru switch-uri
        if(typeof e === "undefined") {
            return;
        }

        var inputName = e.target.name;
        var value = e.target.value;
        if (inputName.includes("-update")) {
            inputName = inputName.split("-");
            inputName = inputName[0];
            value !== "0" ? value = "10" : value = value;
        }
        $(document).trigger("buttonChange", {
            "property": inputName,
            "value": value
        });
    },

    render: function() {
        var method = null;

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        for (var i in this.entity) {
            method = "set" + capitalize(i);
            if (typeof this[method] === "function") {
                this[method]();
            }
        }

    },

    setLS: function(param) {
        var Slider = parseInt(this.entity[param], 10);
        if (Slider > 0) {
            $("." + param + "Slider").removeAttr("readonly").css("opacity", "1");
            $("." + param + "Switch").val(1);
        } else {
            $("." + param + "Switch").val(0);
            $("." + param + "Slider").attr("readonly", true).css("opacity", "0.6");
        }
        $("." + param + "Slider").val(Slider);
        $("." + param + "Span").text(Slider);
    },

    setLights: function() {
        this.setLS("lights");
    },

    setSmoke: function() {
        this.setLS("smoke");
    },

    setDoor: function() {
        if (parseInt(this.entity.door, 10) === 1) {
            $(".doorSwitch").val(1);
        } else {
            $(".doorSwitch").val(0);
        }
    }

});

