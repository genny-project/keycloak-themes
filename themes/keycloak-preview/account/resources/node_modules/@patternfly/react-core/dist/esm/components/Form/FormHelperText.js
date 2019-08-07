function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { css, getModifier } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Form/form.css.js";
import PropTypes from 'prop-types';
import React from 'react';
var propTypes = {
  /** Content rendered inside the Helper Text Item */
  children: PropTypes.node,

  /** Adds error styling to the Helper Text  * */
  isError: PropTypes.bool,

  /** Hides the helper text * */
  isHidden: PropTypes.bool,

  /** Additional classes added to the Helper Text  Item  */
  className: PropTypes.string,

  /** Additional props are spread to the container <p> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  isError: false,
  isHidden: true,
  className: ''
};

var FormHelperText = function FormHelperText(_ref) {
  var className = _ref.className,
      isError = _ref.isError,
      isHidden = _ref.isHidden,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "isError", "isHidden", "children"]);

  return React.createElement("p", _extends({
    className: css(styles.formHelperText, getModifier(styles, isError && 'error'), getModifier(styles, isHidden && 'hidden'), className)
  }, props), children);
};

FormHelperText.propTypes = propTypes;
FormHelperText.defaultProps = defaultProps;
export default FormHelperText;