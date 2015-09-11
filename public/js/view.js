//  View are rol de clasa abstracta

function View(){};
View.prototype = {
    "entity" : null,
    "setEntity" : function(obj){
        this.entity = obj;
        this.entity.initialize();
    },
    "getEntity" : function(){
        return this.entity;
    },
    //  Arunca o eroare daca nu instantiezi functia "render"
    //  atunci cand extinzi clasa
    "render" : function(){
        throw "This should be implemented in child clases";
    }
}
