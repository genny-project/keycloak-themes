"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChipGroup", "./ChipGroupToolbarItem", "./Chip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChipGroup"), require("./ChipGroupToolbarItem"), require("./Chip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChipGroup, global.ChipGroupToolbarItem, global.Chip);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _ChipGroup, _ChipGroupToolbarItem, _Chip) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ChipGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ChipGroup).default;
    }
  });
  Object.defineProperty(exports, "ChipGroupToolbarItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ChipGroupToolbarItem).default;
    }
  });
  Object.defineProperty(exports, "Chip", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Chip).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});