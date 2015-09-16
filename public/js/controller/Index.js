var Controller_Index = function(){
  this.init();
  this.setActions();
};

Controller_Index.prototype = {
	"loaderView" : null,
	"controlPanelView" : null,
	"houseView": null,
	"table" : null,
	"house" : null,
	"buttons" : null,
	"init" : function(){
		this.house = new House({
			lights: currentHouseValues.lights,
			smoke: currentHouseValues.smoke,
			door: currentHouseValues.door
		});
		this.loaderView = new LoaderView();
		//	Creare control panel + randare
		this.controlPanelView = new ControlPanelView();
		this.controlPanelView.setEntity(this.house);
		this.controlPanelView.setActions();
		this.controlPanelView.render();
		//	Creare casa + randare
		this.houseView = new HouseView();
		this.houseView.setEntity(this.house);
		this.houseView.render();

		//	Creare tabel + randare
		this.table = new Table();
		this.table.setEntity(this.house);
		this.table.render();

		this.buttons = new ButtonsView();
	},
	"setActions" : function(){
		var _this = this;
		//	Aici controler-ul asculta la event-ul de "buttonChange"
		//	emis de controlPanelView la fiecare event de change
		//	si pune valorile primite ca parametri in entitatea "house"
		//	apoi randeaza tot(face refresh pentru view-uri)

		$(document).on("buttonChange", function(evt, param) {
		    var oldValues = _this.house.attributes[param.property]; //saves previous values
		    _this.house.attributes[param.property] = parseInt(param.value, 10);
		    if ($(".loader").length === 0) {
		    	_this.loaderView.createLoader();
		    }
		    _this.loaderView.render();
		    _this.house.save(function(isError) {
		        if (isError) {
		            alert("S-a petrecut o eroare. Ne pare rau.");
		            _this.house.attributes[param.property] = oldValues;
		        }
		        _this.controlPanelView.render();
		        _this.houseView.render();
		        _this.table.render();
		        _this.loaderView.remove();
		    });
		    _this.house.set({
		    	lights: $(".lightsSlider").val(),
					smoke: $(".smokeSlider").val(),
					door: $(".doorSwitch").val()
		    })
		});
	    $(document).on("loginClick", function(event) {
	      siteRouter.navigate("login", {trigger: true});
	    });

	    $(document).on("signupClick", function(e) {
	      siteRouter.navigate("signup", {trigger: true});
	    });

	    $(document).on("close", function() {
			siteRouter.navigate("index", {trigger: true});
		});
	}
};


siteRouter.on("route:index", function() {
  var ctrl = new Controller_Index();
});
