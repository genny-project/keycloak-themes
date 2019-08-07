"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]);

exports.componentShape = componentShape;