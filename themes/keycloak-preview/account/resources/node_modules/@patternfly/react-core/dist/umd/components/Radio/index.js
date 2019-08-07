"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Radio"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Radio"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Radio);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Radio) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Radio", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Radio).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});