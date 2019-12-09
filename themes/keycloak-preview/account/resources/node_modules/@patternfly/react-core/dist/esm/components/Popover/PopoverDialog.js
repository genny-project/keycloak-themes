function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/Popover/popover.css.js";
import { css, getModifier } from '@patternfly/react-styles';
export var PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

var PopoverDialog = function PopoverDialog(_ref) {
  var position = _ref.position,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["position", "children", "className"]);

  return React.createElement("div", _extends({
    className: css(styles.popover, getModifier(styles, position, styles.modifiers.top), className),
    role: "dialog",
    "aria-modal": "true"
  }, props), children);
};

PopoverDialog.propTypes = {
  /** PopoverDialog position */
  position: PropTypes.oneOf(Object.values(PopoverPosition)),

  /** PopoverDialog additional class */
  className: PropTypes.string,

  /** PopoverDialog body */
  children: PropTypes.node.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
PopoverDialog.defaultProps = {
  position: 'top',
  className: null
};
export default PopoverDialog;