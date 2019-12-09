"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Button).default;
    }
  });
  Object.defineProperty(exports, "ButtonType", {
    enumerable: true,
    get: function () {
      return _Button.ButtonType;
    }
  });
  Object.defineProperty(exports, "ButtonVariant", {
    enumerable: true,
    get: function () {
      return _Button.ButtonVariant;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});