function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
export var TextVariants = {
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
var propTypes = {
  /** The text component */
  component: PropTypes.oneOf(Object.values(TextVariants)),

  /** Content rendered within the Text */
  children: PropTypes.node,

  /** Additional classes added to the Text */
  className: PropTypes.string,

  /** Additional props are spread to the container component */
  '': PropTypes.any
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
  return React.createElement(Component, _extends({}, props, {
    "data-pf-content": true,
    className: css(className)
  }), children);
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;