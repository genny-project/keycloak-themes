function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Badge/badge.css.js";
export var propTypes = {
  /**  Adds styling to the badge to indicate it has been read */
  isRead: PropTypes.bool,

  /** content rendered inside the Badge */
  children: PropTypes.node,

  /** additional classes added to the Badge */
  className: PropTypes.string,

  /** Additional props are spread to the container <span> */
  '': PropTypes.any
};
export var defaultProps = {
  isRead: false,
  children: '',
  className: ''
};

var Badge = function Badge(_ref) {
  var isRead = _ref.isRead,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["isRead", "className", "children"]);

  return React.createElement("span", _extends({}, props, {
    className: css(styles.badge, isRead ? styles.modifiers.read : styles.modifiers.unread, className)
  }), children);
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge;