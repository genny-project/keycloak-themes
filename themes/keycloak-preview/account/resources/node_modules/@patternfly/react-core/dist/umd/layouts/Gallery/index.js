"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Gallery", "./GalleryItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Gallery"), require("./GalleryItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Gallery, global.GalleryItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Gallery, _GalleryItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Gallery", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Gallery).default;
    }
  });
  Object.defineProperty(exports, "GalleryItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_GalleryItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});