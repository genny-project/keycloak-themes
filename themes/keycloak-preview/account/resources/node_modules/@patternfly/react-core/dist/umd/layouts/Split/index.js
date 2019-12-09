"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Split", "./SplitItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Split"), require("./SplitItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Split, global.SplitItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Split, _SplitItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Split", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Split).default;
    }
  });
  Object.defineProperty(exports, "SplitItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SplitItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});