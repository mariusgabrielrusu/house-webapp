"use strict";
var Utils = function() {};
Utils.prototype = {
  "capitalize" : function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
  }
}