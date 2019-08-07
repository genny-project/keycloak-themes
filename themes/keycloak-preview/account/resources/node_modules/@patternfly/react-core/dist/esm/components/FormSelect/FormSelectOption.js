function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  /** additional classes added to the Select Option */
  className: PropTypes.string,

  /** the value for the option */
  value: PropTypes.any,

  /** the label for the option */
  label: PropTypes.string.isRequired,

  /** flag indicating if the option is disabled */
  isDisabled: PropTypes.bool,

  /** Additional props are spread to the container <option> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  value: '',
  isDisabled: false
};

var FormSelectOption = function FormSelectOption(_ref) {
  var className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, ["className", "value", "label", "isDisabled"]);

  return React.createElement("option", _extends({}, props, {
    className: className,
    value: value,
    disabled: isDisabled
  }), label);
};

FormSelectOption.propTypes = propTypes;
FormSelectOption.defaultProps = defaultProps;
export default FormSelectOption;