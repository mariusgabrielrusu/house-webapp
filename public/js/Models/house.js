var House = Backbone.Model.extend({
    "save" : function (callback) {
        $.ajax({
            "url" : "/ajax",
            "type" : "post",
            "dataType" : "json",
            "data" : {
                "lights" : $(".lightsSlider").val(),
                "smoke" : $(".smokeSlider").val(),
                "door" : $(".doorSwitch").val()
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

