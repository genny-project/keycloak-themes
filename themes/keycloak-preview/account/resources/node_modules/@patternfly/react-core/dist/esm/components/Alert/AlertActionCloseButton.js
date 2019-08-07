function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonVariant } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';
var propTypes = {
  /** additional classes added to the AlertActionCloseButton */
  className: PropTypes.string,

  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,

  /** Aria Label for the Close button */
  'aria-label': PropTypes.string,

  /** Additional props are spread to the container <Button>  */
  '': PropTypes.any
};
var defaultProps = {
  'aria-label': '',
  className: '',
  onClose: function onClose() {
    return undefined;
  }
};

var AlertActionCloseButton = function AlertActionCloseButton(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      ariaLabel = _ref['aria-label'],
      title = _ref.title,
      variantLabel = _ref.variantLabel,
      props = _objectWithoutProperties(_ref, ["className", "onClose", "aria-label", "title", "variantLabel"]);

  return React.createElement(Button, _extends({
    variant: ButtonVariant.plain,
    onClick: onClose,
    "aria-label": ariaLabel === '' ? "Close ".concat(variantLabel, " alert: ").concat(title) : ariaLabel
  }, props), React.createElement(TimesIcon, null));
};

AlertActionCloseButton.propTypes = propTypes;
AlertActionCloseButton.defaultProps = defaultProps;
export default AlertActionCloseButton;