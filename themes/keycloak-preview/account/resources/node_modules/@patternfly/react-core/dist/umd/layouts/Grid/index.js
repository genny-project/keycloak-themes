"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Grid", "./GridItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Grid"), require("./GridItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Grid, global.GridItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Grid, _GridItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Grid", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Grid).default;
    }
  });
  Object.defineProperty(exports, "GridItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_GridItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});