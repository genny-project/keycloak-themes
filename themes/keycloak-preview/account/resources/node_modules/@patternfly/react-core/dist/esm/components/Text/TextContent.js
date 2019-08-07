function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Content/content.css.js";
import { StyleSheet, css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** Content rendered within the TextContent */
  children: PropTypes.node,

  /** Additional classes added to the TextContent */
  className: PropTypes.string,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: ''
}; // Get the stylesheet and make it more specific by appending [data-pf-content] attribute to selectors
// This way even if other components are nested within the TextContent, their text styling will not be affected

var moreSpecificStyles = styles.raw.replace(/(.pf-c-content\s[a-zA-Z0-9]+)/g, '$1[data-pf-content]');
var updatedStyles = StyleSheet.parse(moreSpecificStyles);

var TextContent = function TextContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("div", _extends({}, props, {
    className: css(updatedStyles.content, className)
  }), children);
};

TextContent.propTypes = propTypes;
TextContent.defaultProps = defaultProps;
export default TextContent;