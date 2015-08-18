var house = {
    "lights" : null,
    "smoke" : null,
    "door" : null,
    "init" : function() {
        this.lights = currentHouseValues.lights;
        this.smoke = currentHouseValues.smoke;
        this.door = currentHouseValues.door;
    },
    "save" : function() {
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
                console.log(data);
            },
            "error" : function() {
                console.log("Nu se poate accesa");
            }
        });
    }
}
