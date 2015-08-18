//	Tabel in care afisez valorile pentru lumina, fum si usa
//	Asta a fost un task in plus, de la Tibi
//	Tabelul este tot un view
function Table(){}
Table.prototype = new View();
Table.prototype.constructor = Table;
Table.prototype.render = function() {
    var _this = this;
    for (var i in _this.entity) {
        if (typeof i !== "function") {
            $(".table_" + i).text(_this.entity[i]);
        }
    }
}
