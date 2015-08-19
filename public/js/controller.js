//	Initializare elemente entitate
house.init();

//	Creare control panel + randare
var controlPanelView = new ControlPanelView();
controlPanelView.setEntity(house);
controlPanelView.setActions();

//	Creare casa + randare
var houseView = new HouseView();
houseView.setEntity(house);
houseView.render();

//	Creare tabel + randare
var table = new Table();
table.setEntity(house);
table.render();

//	Aici controler-ul asculta la event-ul de "buttonChange"
//	emis de controlPanelView la fiecare event de change
//	si pune valorile primite ca parametri in entitatea "house"
//	apoi randeaza tot(face refresh pentru view-uri)
$(document).on("buttonChange", function(evt, param){
    var oldValues = house[param.property]; //saves previous values
    house[param.property] = param.value;
    house.save(function(isError) {
        if(isError) {
            alert("S-a petrecut o eroare. Ne pare rau.");
            house[param.property] = oldValues.value;
        }

        houseView.render();
        table.render();
    });

});
