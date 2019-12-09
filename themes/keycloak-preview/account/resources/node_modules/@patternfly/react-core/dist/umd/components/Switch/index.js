"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Switch"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Switch"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Switch);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Switch) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Switch", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Switch).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});