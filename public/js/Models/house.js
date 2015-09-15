var House = Backbone.Model.extend({
    "lights" : null,
    "smoke" : null,
    "door" : null,
    "initialize" : function () {
        this.lights = currentHouseValues.lights;
        this.smoke = currentHouseValues.smoke;
        this.door = currentHouseValues.door;
    },
    "save" : function (callback) {
        $.ajax({
            "url" : "/ajax",
            "type" : "post",
            "dataType" : "json",
            "data" : {
                "lights" : this.lights,
                "smoke" : this.smoke,
                "door" : this.door
            },
            "success" : function (data) {
                callback(data.error.length > 0);
            },
            "error" : function () {
                callback(false);
            }
        });
    }
});

