"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Stack", "./StackItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Stack"), require("./StackItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Stack, global.StackItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Stack, _StackItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Stack", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Stack).default;
    }
  });
  Object.defineProperty(exports, "StackItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_StackItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});