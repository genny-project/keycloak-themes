"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ContextSelector", "./ContextSelectorItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ContextSelector"), require("./ContextSelectorItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ContextSelector, global.ContextSelectorItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _ContextSelector, _ContextSelectorItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ContextSelector", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ContextSelector).default;
    }
  });
  Object.defineProperty(exports, "ContextSelectorItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ContextSelectorItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});