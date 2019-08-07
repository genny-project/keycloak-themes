"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Progress", "./ProgressContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Progress"), require("./ProgressContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Progress, global.ProgressContainer);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Progress, _ProgressContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Progress", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Progress).default;
    }
  });
  Object.defineProperty(exports, "ProgressSize", {
    enumerable: true,
    get: function () {
      return _Progress.ProgressSize;
    }
  });
  Object.defineProperty(exports, "ProgressMeasureLocation", {
    enumerable: true,
    get: function () {
      return _ProgressContainer.ProgressMeasureLocation;
    }
  });
  Object.defineProperty(exports, "ProgressVariant", {
    enumerable: true,
    get: function () {
      return _ProgressContainer.ProgressVariant;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});