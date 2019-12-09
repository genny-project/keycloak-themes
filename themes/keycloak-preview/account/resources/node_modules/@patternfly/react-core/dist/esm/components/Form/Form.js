function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Form/form.css.js";
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { FormContext } from './FormContext';
var propTypes = {
  /** Anything that can be rendered as Form content. */
  children: PropTypes.node,

  /** Additional classes added to the Form. */
  className: PropTypes.string,

  /** Sets the Form to horizontal. */
  isHorizontal: PropTypes.bool,

  /** Additional props are spread to the container <form> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  isHorizontal: false
};

var Form = function Form(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isHorizontal = _ref.isHorizontal,
      props = _objectWithoutProperties(_ref, ["className", "children", "isHorizontal"]);

  return React.createElement("form", _extends({
    noValidate: true
  }, props, {
    className: css(styles.form, isHorizontal && styles.modifiers.horizontal, className)
  }), React.createElement(FormContext.Provider, {
    value: {
      isHorizontal: isHorizontal
    }
  }, children));
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;