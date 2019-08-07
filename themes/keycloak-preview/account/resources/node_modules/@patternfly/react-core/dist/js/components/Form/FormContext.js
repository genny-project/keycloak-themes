"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContext = _react.default.createContext({
  isHorizontal: false
});

exports.FormContext = FormContext;