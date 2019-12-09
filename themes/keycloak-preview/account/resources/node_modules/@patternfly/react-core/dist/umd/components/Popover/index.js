"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Popover"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Popover"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Popover);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Popover) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Popover", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Popover).default;
    }
  });
  Object.defineProperty(exports, "PopoverPosition", {
    enumerable: true,
    get: function () {
      return _Popover.PopoverPosition;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});