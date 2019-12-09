"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _exenv = require("exenv");

// https://github.com/reactjs/react-modal/blob/master/src/helpers/safeHTMLElement.js
var _default = _exenv.canUseDOM ? window.HTMLElement : {};

exports.default = _default;