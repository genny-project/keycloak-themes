"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextVariants = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  a: 'a',
  small: 'small',
  blockquote: 'blockquote',
  pre: 'pre'
};
exports.TextVariants = TextVariants;
var propTypes = {
  /** The text component */
  component: _propTypes.default.oneOf(Object.values(TextVariants)),

  /** Content rendered within the Text */
  children: _propTypes.default.node,

  /** Additional classes added to the Text */
  className: _propTypes.default.string,

  /** Additional props are spread to the container component */
  '': _propTypes.default.any
};
var defaultProps = {
  component: 'p',
  children: null,
  className: ''
};

var Text = function Text(_ref) {
  var component = _ref.component,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["component", "children", "className"]);

  var Component = TextVariants[component] || 'p';
  return _react.default.createElement(Component, _extends({}, props, {
    "data-pf-content": true,
    className: (0, _reactStyles.css)(className)
  }), children);
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
var _default = Text;
exports.default = _default;