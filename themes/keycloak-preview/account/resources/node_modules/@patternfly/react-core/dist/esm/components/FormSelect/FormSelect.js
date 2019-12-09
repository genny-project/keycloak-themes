function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/FormControl/form-control.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** content rendered inside the FormSelect */
  children: PropTypes.node.isRequired,

  /** additional classes added to the FormSelect control */
  className: PropTypes.string,

  /** value of selected option */
  value: PropTypes.any,

  /** Flag indicating selection is valid */
  isValid: PropTypes.bool,

  /** Flag indicating the FormSelect is disabled */
  isDisabled: PropTypes.bool,

  /** Optional callback for updating when selection loses focus */
  onBlur: PropTypes.func,

  /** Optional callback for updating when selection gets focus */
  onFocus: PropTypes.func,

  /** Optional callback for updating when selection changes */
  onChange: PropTypes.func,

  /** Custom flag to show that the FormSelect requires an associated id or aria-label. */
  'aria-label': function ariaLabel(props) {
    if (!props.id && !props['aria-label']) {
      return new Error('FormSelect requires either an id or aria-label to be specified');
    }

    return null;
  },

  /** Additional props are spread to the container <select> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  value: '',
  isValid: true,
  isDisabled: false,
  onBlur: function onBlur() {
    return undefined;
  },
  onFocus: function onFocus() {
    return undefined;
  },
  onChange: function onChange() {
    return undefined;
  },
  'aria-label': null
};

var FormSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormSelect, _React$Component);

  function FormSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange(event.currentTarget.value, event);
    });

    return _this;
  }

  _createClass(FormSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          value = _this$props.value,
          isValid = _this$props.isValid,
          isDisabled = _this$props.isDisabled,
          props = _objectWithoutProperties(_this$props, ["children", "className", "value", "isValid", "isDisabled"]);

      return React.createElement("select", _extends({}, props, {
        className: css(styles.formControl, className),
        "aria-invalid": !isValid,
        onChange: this.handleChange,
        disabled: isDisabled,
        value: value
      }), children);
    }
  }]);

  return FormSelect;
}(React.Component);

FormSelect.propTypes = propTypes;
FormSelect.defaultProps = defaultProps;
export default FormSelect;