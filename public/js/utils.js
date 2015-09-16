"use strict";
var Utils = function() {};
Utils.prototype = {
  "capitalize" : function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
  },
  "enterKeyPress" : $(function() {
    $("fieldset input").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      $('span.ui-button-text').click();
      return false;
    } else {
      return true;
    }
  });
  })
}