"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";
});