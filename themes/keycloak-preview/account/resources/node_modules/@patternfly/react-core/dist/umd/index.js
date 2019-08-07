"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components", "./layouts", "./helpers", "./styles/gutters", "./styles/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components"), require("./layouts"), require("./helpers"), require("./styles/gutters"), require("./styles/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.components, global.layouts, global.helpers, global.gutters, global.sizes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _components, _layouts, _helpers, _gutters, _sizes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_components).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _components[key];
      }
    });
  });
  Object.keys(_layouts).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _layouts[key];
      }
    });
  });
  Object.keys(_helpers).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _helpers[key];
      }
    });
  });
  Object.defineProperty(exports, "GutterSize", {
    enumerable: true,
    get: function () {
      return _gutters.GutterSize;
    }
  });
  Object.defineProperty(exports, "BaseSizes", {
    enumerable: true,
    get: function () {
      return _sizes.BaseSizes;
    }
  });
  Object.defineProperty(exports, "DeviceSizes", {
    enumerable: true,
    get: function () {
      return _sizes.DeviceSizes;
    }
  });
});