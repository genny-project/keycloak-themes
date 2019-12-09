"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Modal", "./ModalBox", "./ModalBoxBody", "./ModalBoxCloseButton", "./ModalBoxFooter", "./ModalBoxHeader", "./ModalContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Modal"), require("./ModalBox"), require("./ModalBoxBody"), require("./ModalBoxCloseButton"), require("./ModalBoxFooter"), require("./ModalBoxHeader"), require("./ModalContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Modal, global.ModalBox, global.ModalBoxBody, global.ModalBoxCloseButton, global.ModalBoxFooter, global.ModalBoxHeader, global.ModalContent);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Modal, _ModalBox, _ModalBoxBody, _ModalBoxCloseButton, _ModalBoxFooter, _ModalBoxHeader, _ModalContent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Modal", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Modal).default;
    }
  });
  Object.defineProperty(exports, "ModalBox", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ModalBox).default;
    }
  });
  Object.defineProperty(exports, "ModalBoxBody", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ModalBoxBody).default;
    }
  });
  Object.defineProperty(exports, "ModalBoxCloseButton", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ModalBoxCloseButton).default;
    }
  });
  Object.defineProperty(exports, "ModalBoxFooter", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ModalBoxFooter).default;
    }
  });
  Object.defineProperty(exports, "ModalBoxHeader", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ModalBoxHeader).default;
    }
  });
  Object.defineProperty(exports, "ModalContent", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ModalContent).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});