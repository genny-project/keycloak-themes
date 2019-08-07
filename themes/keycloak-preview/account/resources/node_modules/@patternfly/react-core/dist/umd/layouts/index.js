"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Bullseye", "./Gallery", "./Grid", "./Level", "./Split", "./Stack", "./Toolbar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Bullseye"), require("./Gallery"), require("./Grid"), require("./Level"), require("./Split"), require("./Stack"), require("./Toolbar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Bullseye, global.Gallery, global.Grid, global.Level, global.Split, global.Stack, global.Toolbar);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Bullseye, _Gallery, _Grid, _Level, _Split, _Stack, _Toolbar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Bullseye).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Bullseye[key];
      }
    });
  });
  Object.keys(_Gallery).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Gallery[key];
      }
    });
  });
  Object.keys(_Grid).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Grid[key];
      }
    });
  });
  Object.keys(_Level).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Level[key];
      }
    });
  });
  Object.keys(_Split).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Split[key];
      }
    });
  });
  Object.keys(_Stack).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Stack[key];
      }
    });
  });
  Object.keys(_Toolbar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Toolbar[key];
      }
    });
  });
});