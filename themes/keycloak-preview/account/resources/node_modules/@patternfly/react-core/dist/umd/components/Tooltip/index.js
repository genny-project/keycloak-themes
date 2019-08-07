"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Tooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Tooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Tooltip);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Tooltip) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Tooltip", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Tooltip).default;
    }
  });
  Object.defineProperty(exports, "TooltipPosition", {
    enumerable: true,
    get: function () {
      return _Tooltip.TooltipPosition;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});