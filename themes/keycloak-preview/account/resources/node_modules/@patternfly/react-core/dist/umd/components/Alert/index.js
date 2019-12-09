"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Alert", "./AlertActionCloseButton", "./AlertActionLink"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Alert"), require("./AlertActionCloseButton"), require("./AlertActionLink"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Alert, global.AlertActionCloseButton, global.AlertActionLink);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Alert, _AlertActionCloseButton, _AlertActionLink) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Alert", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Alert).default;
    }
  });
  Object.defineProperty(exports, "AlertVariant", {
    enumerable: true,
    get: function () {
      return _Alert.AlertVariant;
    }
  });
  Object.defineProperty(exports, "AlertActionCloseButton", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AlertActionCloseButton).default;
    }
  });
  Object.defineProperty(exports, "AlertActionLink", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AlertActionLink).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});