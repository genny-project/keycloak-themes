function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Label/label.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

var Label = function Label(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isCompact = _ref.isCompact,
      props = _objectWithoutProperties(_ref, ["className", "children", "isCompact"]);

  return React.createElement("span", _extends({}, props, {
    className: css(styles.label, className, isCompact && styles.modifiers.compact)
  }), children);
};

Label.propTypes = {
  /** Additional classes added to the label. */
  className: PropTypes.string,

  /** Content rendered inside the label. */
  children: PropTypes.node.isRequired,

  /** Flag to show if the label is compact. */
  isCompact: PropTypes.bool,

  /** Additional props are spread to the container <span> */
  '': PropTypes.any
};
Label.defaultProps = {
  className: '',
  isCompact: false
};
export default Label;