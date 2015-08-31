var House = function(){};
House.prototype = {
    "lights" : null,
    "smoke" : null,
    "door" : null,
    "init" : function() {
        this.lights = currentHouseValues.lights;
        this.smoke = currentHouseValues.smoke;
        this.door = currentHouseValues.door;
    },
    "save" : function(callback) {
        $.ajax({
            "url" : "/ajax",
            "type" : "post",
            "dataType" : "json",
            "data" : {
                "lights" : this.lights,
                "smoke" : this.smoke,
                "door" : this.door
            },
            "success" : function(data) {
                callback(data.error.length > 0);
            },
            "error" : function() {
                callback(false);
            }
        });
    }
};
