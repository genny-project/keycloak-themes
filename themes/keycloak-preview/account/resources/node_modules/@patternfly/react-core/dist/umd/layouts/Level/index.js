"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Level", "./LevelItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Level"), require("./LevelItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Level, global.LevelItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Level, _LevelItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Level", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Level).default;
    }
  });
  Object.defineProperty(exports, "LevelItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LevelItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});