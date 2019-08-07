"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TextInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TextInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TextInput);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _TextInput) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "TextInput", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TextInput).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});