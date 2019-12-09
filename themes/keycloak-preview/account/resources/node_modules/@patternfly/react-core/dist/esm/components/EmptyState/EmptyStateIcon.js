function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/EmptyState/empty-state.css.js";

var EmptyStateIcon = function EmptyStateIcon(_ref) {
  var IconComponent = _ref.icon,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["icon", "className"]);

  return React.createElement(IconComponent, _extends({
    className: css(styles.emptyStateIcon, className)
  }, props, {
    "aria-hidden": "true"
  }));
};

EmptyStateIcon.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,

  /** Icon component to be rendered inside the EmptyState */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,

  /** Additional props are spread to the Icon */
  '': PropTypes.any
};
EmptyStateIcon.defaultProps = {
  className: ''
};
export default EmptyStateIcon;