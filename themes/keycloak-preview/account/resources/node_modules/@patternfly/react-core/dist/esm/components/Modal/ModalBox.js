function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/ModalBox/modal-box.css.js";
var propTypes = {
  /** content rendered inside the ModalBox. */
  children: PropTypes.node.isRequired,

  /** additional classes added to the ModalBox */
  className: PropTypes.string,

  /** Creates a large version of the ModalBox */
  isLarge: PropTypes.bool,

  /** Creates a small version of the ModalBox. */
  isSmall: PropTypes.bool,

  /** string to use for Modal Box label */
  title: PropTypes.string.isRequired,

  /** id to use for Modal Box description */
  id: PropTypes.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  isLarge: false,
  isSmall: false
};

var ModalBox = function ModalBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isLarge = _ref.isLarge,
      isSmall = _ref.isSmall,
      title = _ref.title,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["children", "className", "isLarge", "isSmall", "title", "id"]);

  return React.createElement("div", _extends({}, props, {
    role: "dialog",
    "aria-label": title,
    "aria-describedby": id,
    "aria-modal": "true",
    className: css(styles.modalBox, className, isLarge && styles.modifiers.lg, isSmall && styles.modifiers.sm)
  }), children);
};

ModalBox.propTypes = propTypes;
ModalBox.defaultProps = defaultProps;
export default ModalBox;