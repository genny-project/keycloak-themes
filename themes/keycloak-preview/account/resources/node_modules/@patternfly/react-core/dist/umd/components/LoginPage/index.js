"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./LoginForm", "./LoginPage", "./LoginFooterItem", "./LoginMainFooterBandItem", "./LoginMainFooterLinksItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./LoginForm"), require("./LoginPage"), require("./LoginFooterItem"), require("./LoginMainFooterBandItem"), require("./LoginMainFooterLinksItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.LoginForm, global.LoginPage, global.LoginFooterItem, global.LoginMainFooterBandItem, global.LoginMainFooterLinksItem);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _LoginForm, _LoginPage, _LoginFooterItem, _LoginMainFooterBandItem, _LoginMainFooterLinksItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "LoginForm", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LoginForm).default;
    }
  });
  Object.defineProperty(exports, "LoginPage", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LoginPage).default;
    }
  });
  Object.defineProperty(exports, "LoginFooterItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LoginFooterItem).default;
    }
  });
  Object.defineProperty(exports, "LoginMainFooterBandItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LoginMainFooterBandItem).default;
    }
  });
  Object.defineProperty(exports, "LoginMainFooterLinksItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LoginMainFooterLinksItem).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});