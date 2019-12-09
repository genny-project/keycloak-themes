"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./AboutModal"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./AboutModal"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AboutModal);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _AboutModal) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "AboutModal", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AboutModal).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});