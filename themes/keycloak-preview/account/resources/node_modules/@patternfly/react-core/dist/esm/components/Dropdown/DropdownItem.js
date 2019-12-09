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
import ReactDOM from 'react-dom';
import dropdownStyles from "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js";
import appLauncherStyles from "../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../helpers/componentShape';
import { DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';
var propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,

  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,

  /** Indicates which component will be used as dropdown item */
  component: componentShape,

  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,

  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,

  /** Default hyperlink location */
  href: PropTypes.string,
  index: PropTypes.number,
  context: PropTypes.shape({
    keyHandler: PropTypes.func,
    sendRef: PropTypes.func
  }),

  /** Additional props are spread to the container component */
  '': PropTypes.any,

  /** Callback for click event */
  onClick: PropTypes.func
};
var defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#',
  onClick: Function.prototype,
  index: -1,
  context: {
    keyHandler: Function.prototype,
    sendRef: Function.prototype
  }
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.keyCode === KEY_CODES.TAB) return;
      event.preventDefault();

      if (event.keyCode === KEY_CODES.ARROW_UP) {
        _this.props.context.keyHandler(_this.props.index, KEYHANDLER_DIRECTION.UP);
      } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
        _this.props.context.keyHandler(_this.props.index, KEYHANDLER_DIRECTION.DOWN);
      } else if (event.keyCode === KEY_CODES.ENTER) {
        if (!_this.ref.current.getAttribute) ReactDOM.findDOMNode(_this.ref.current).click();else {
          _this.ref.current.click && _this.ref.current.click();
        }
      }
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.context.sendRef(this.props.index, this.ref.current, this.props.isDisabled);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          isHovered = _this$props.isHovered,
          context = _this$props.context,
          _onClick = _this$props.onClick,
          Component = _this$props.component,
          isAppLauncher = _this$props.isAppLauncher,
          isDisabled = _this$props.isDisabled,
          index = _this$props.index,
          props = _objectWithoutProperties(_this$props, ["className", "children", "isHovered", "context", "onClick", "component", "isAppLauncher", "isDisabled", "index"]);

      var additionalProps = props;
      var classes;

      if (Component === 'a') {
        additionalProps['aria-disabled'] = isDisabled;
        additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
      } else if (Component === 'button') {
        additionalProps.disabled = isDisabled;
        additionalProps.type = additionalProps.type || 'button';
      }

      if (isAppLauncher) {
        classes = css(appLauncherStyles.appLauncherMenuItem, isDisabled && appLauncherStyles.modifiers.disabled, isHovered && appLauncherStyles.modifiers.hover, className);
      } else {
        this.props.role === 'separator' ? classes = className : classes = css(dropdownStyles.dropdownMenuItem, isDisabled && dropdownStyles.modifiers.disabled, isHovered && dropdownStyles.modifiers.hover, className);
      }

      return React.createElement(DropdownContext.Consumer, null, function (onSelect) {
        return React.createElement("li", {
          role: "none"
        }, React.isValidElement(children) ? React.Children.map(children, function (child) {
          return React.cloneElement(child, {
            className: "".concat(css(isDisabled && dropdownStyles.modifiers.disabled, isHovered && dropdownStyles.modifiers.hover, className), " ").concat(child.props.className),
            ref: _this2.ref,
            onKeyDown: _this2.onKeyDown,
            onClick: function onClick(event) {
              if (!isDisabled) {
                _onClick && _onClick(event);
                onSelect && onSelect(event);
              }
            }
          });
        }) : React.createElement(Component, _extends({}, additionalProps, {
          className: classes,
          ref: _this2.ref,
          onKeyDown: _this2.onKeyDown,
          onClick: function onClick(event) {
            if (!isDisabled) {
              _onClick && _onClick(event);
              onSelect && onSelect(event);
            }
          }
        }), children));
      });
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
export default DropdownItem;