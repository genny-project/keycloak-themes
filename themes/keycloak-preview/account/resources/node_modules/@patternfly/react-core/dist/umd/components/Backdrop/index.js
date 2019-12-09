"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Backdrop"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Backdrop"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Backdrop);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Backdrop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Backdrop", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Backdrop).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});