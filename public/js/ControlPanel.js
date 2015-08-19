//  Aka ControlPanelView extends View
//  Trebuie mentionat constructorul (by default, ar fi fost View)

//  Astea 3 linii de cod sunt cele care construiesc clasa
function ControlPanelView(){};
ControlPanelView.prototype = new View();
ControlPanelView.prototype.constructor = ControlPanelView;

ControlPanelView.prototype.setActions = function(){
    var _this = this;
    $(":input").change(function(e) {
        //  Chestiile care vor fi modificate in "house"
        //  Am pus numele cu "update" pentru switch-uri
        var inputName = e.target.name;
        var value = e.target.value;
        if (inputName.includes("-update")) {
            inputName = inputName.split("-");
            inputName = inputName[0];
            value !== "0" ? value = "10" : value = value;
        }

        $(document).trigger("buttonChange", {
            "property" : inputName,
            "value" : value
        });

        //  Update continut grafic ControlPanelView
        for (var i in _this.entity) {
            if (typeof i !== "function") {
                //  Pentru slidere, cand sa poata fi accesate
                var slider = $("." + i + "Slider");
                if ($("[name=" + i + "-update]").val() === "0") {
                    slider.attr("readonly", "readonly");
                    slider.val(0);
                    slider.css("opacity", "0.6");
                }
                else {
                    slider.removeAttr("readonly");
                    slider.css("opacity", "1");
                }

                //  Span-urile pentru valori
                $("." + i + "Span").text(slider.val());
            }
        }
    });
}
