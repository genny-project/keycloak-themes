"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Bullseye"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Bullseye"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Bullseye);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Bullseye) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Bullseye", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Bullseye).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});