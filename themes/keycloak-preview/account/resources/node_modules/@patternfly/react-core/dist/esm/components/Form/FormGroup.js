function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/Form/form.css.js";
import { ASTERISK } from '../../helpers/htmlConstants';
import { FormContext } from '../Form/FormContext';
import { css, getModifier } from '@patternfly/react-styles';
var propTypes = {
  /** Anything that can be rendered as FormGroup content. */
  children: PropTypes.node,

  /** Additional classes added to the FormGroup. */
  className: PropTypes.string,

  /** Label text before the field. */
  label: PropTypes.node,

  /** Sets the FormGroup required. */
  isRequired: PropTypes.bool,

  /** Sets the FormGroup isValid. */
  isValid: PropTypes.bool,

  /** Sets the FormGroup isInline. */
  isInline: PropTypes.bool,

  /** Helper text after the field. It can be a simple text or an object. */
  helperText: PropTypes.node,

  /** Helper text after the field when the field is isValid. It can be a simple text or an object. */
  helperTextInvalid: PropTypes.node,

  /** ID of the included field. It has to be the same for proper working. */
  fieldId: PropTypes.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  label: undefined,
  isRequired: false,
  isValid: true,
  isInline: false,
  helperText: undefined,
  helperTextInvalid: undefined
};

var FormGroup = function FormGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      isRequired = _ref.isRequired,
      isValid = _ref.isValid,
      isInline = _ref.isInline,
      helperText = _ref.helperText,
      helperTextInvalid = _ref.helperTextInvalid,
      fieldId = _ref.fieldId,
      props = _objectWithoutProperties(_ref, ["className", "children", "label", "isRequired", "isValid", "isInline", "helperText", "helperTextInvalid", "fieldId"]);

  return React.createElement(FormContext.Consumer, null, function (_ref2) {
    var isHorizontal = _ref2.isHorizontal;
    return React.createElement("div", _extends({}, props, {
      className: css(styles.formGroup, getModifier(styles, isInline && 'inline'), className)
    }), label && React.createElement("label", {
      className: css(styles.formLabel),
      htmlFor: fieldId
    }, label, isRequired && React.createElement("span", {
      className: css(styles.formLabelRequired),
      "aria-hidden": "true"
    }, ASTERISK)), isHorizontal ? React.createElement("div", {
      className: css(styles.formHorizontalGroup)
    }, children) : children, (isValid && helperText || !isValid && helperTextInvalid) && React.createElement("div", {
      className: css(styles.formHelperText, getModifier(styles, !isValid && 'error')),
      id: "".concat(fieldId, "-helper"),
      "aria-live": "polite"
    }, isValid ? helperText : helperTextInvalid));
  });
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
export default FormGroup;