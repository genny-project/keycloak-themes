"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var KEY_CODES = exports.KEY_CODES = {
    ARROW_UP: 38,
    ARROW_DOWN: 40,
    ESCAPE_KEY: 27,
    TAB: 9,
    ENTER: 13,
    SPACE: ' '
  };
  var SIDE = exports.SIDE = {
    RIGHT: 'right',
    LEFT: 'left',
    BOTH: 'both',
    NONE: 'none'
  };
  var KEYHANDLER_DIRECTION = exports.KEYHANDLER_DIRECTION = {
    UP: 'up',
    DOWN: 'down'
  };
});