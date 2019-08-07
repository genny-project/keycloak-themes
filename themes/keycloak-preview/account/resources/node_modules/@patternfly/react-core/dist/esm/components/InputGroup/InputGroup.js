function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/InputGroup/input-group.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { FormSelect } from '../FormSelect';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';

var InputGroup = function InputGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var formCtrls = [FormSelect, TextArea, TextInput].map(function (comp) {
    return comp.toString();
  });
  var idItem = React.Children.toArray(children).find(function (child) {
    return !formCtrls.includes(child.type.toString()) && child.props.id;
  });
  return React.createElement("div", _extends({
    className: css(styles.inputGroup, className)
  }, props), idItem ? React.Children.map(children, function (child) {
    return formCtrls.includes(child.type.toString()) ? React.cloneElement(child, {
      'aria-describedby': idItem.props.id
    }) : child;
  }) : children);
};

InputGroup.propTypes = {
  /** Additional classes added to the input group. */
  className: PropTypes.string,

  /** Content rendered inside the input group. */
  children: PropTypes.node.isRequired
};
InputGroup.defaultProps = {
  className: ''
};
export default InputGroup;