"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Label"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Label"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Label);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Label) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Label", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Label).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});