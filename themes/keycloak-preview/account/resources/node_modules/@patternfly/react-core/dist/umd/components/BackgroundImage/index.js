"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./BackgroundImage"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./BackgroundImage"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BackgroundImage);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _BackgroundImage) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "BackgroundImage", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_BackgroundImage).default;
    }
  });
  Object.defineProperty(exports, "BackgroundImageSrc", {
    enumerable: true,
    get: function () {
      return _BackgroundImage.BackgroundImageSrc;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});