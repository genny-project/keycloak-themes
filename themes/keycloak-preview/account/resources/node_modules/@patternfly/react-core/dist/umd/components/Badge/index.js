"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Badge"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Badge"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Badge);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Badge) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Badge", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Badge).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});