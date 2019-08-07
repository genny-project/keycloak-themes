"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./InputGroup", "./InputGroupText"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./InputGroup"), require("./InputGroupText"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.InputGroup, global.InputGroupText);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _InputGroup, _InputGroupText) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "InputGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_InputGroup).default;
    }
  });
  Object.defineProperty(exports, "InputGroupText", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_InputGroupText).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});