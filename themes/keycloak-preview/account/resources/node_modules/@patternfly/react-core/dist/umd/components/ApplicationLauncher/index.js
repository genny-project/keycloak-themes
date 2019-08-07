"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ApplicationLauncher"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ApplicationLauncher"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ApplicationLauncher);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _ApplicationLauncher) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ApplicationLauncher", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ApplicationLauncher).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});