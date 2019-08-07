function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js";
import { Button, ButtonVariant } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';
var propTypes = {
  /** additional classes added to the About Modal Close button */
  className: PropTypes.string,

  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  onClose: function onClose() {
    return undefined;
  }
};

var AboutModalBoxCloseButton = function AboutModalBoxCloseButton(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, ["className", "onClose"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.aboutModalBoxClose, className)
  }), React.createElement(Button, {
    variant: ButtonVariant.plain,
    onClick: onClose,
    "aria-label": "Close Dialog"
  }, React.createElement(TimesIcon, null)));
};

AboutModalBoxCloseButton.propTypes = propTypes;
AboutModalBoxCloseButton.defaultProps = defaultProps;
export default AboutModalBoxCloseButton;