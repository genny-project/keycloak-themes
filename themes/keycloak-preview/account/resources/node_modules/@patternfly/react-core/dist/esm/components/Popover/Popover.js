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
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import FocusTrap from 'focus-trap-react';
import { KEY_CODES } from '../../helpers/constants';
import styles from "../../@patternfly/patternfly/components/Popover/popover.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import PopoverArrow from './PopoverArrow';
import PopoverContent from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';
import PopoverFooter from './PopoverFooter';
import PopoverCloseButton from './PopoverCloseButton';
import GenerateId from '../../helpers/GenerateId/GenerateId';
import { c_popover_MaxWidth as popoverMaxWidth } from '@patternfly/react-tokens';
import { tippyStyles } from '../Tooltip/styles';
tippyStyles();
export var PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};
var propTypes = {
  /** Popover position */
  position: PropTypes.oneOf(Object.keys(PopoverPosition).map(function (key) {
    return PopoverPosition[key];
  })),

  /** If true, tries to keep the popover in view by flipping it if necessary */
  enableFlip: PropTypes.bool,

  /** Popover additional class */
  className: PropTypes.string,

  /** The reference element to which the popover is relatively placed to */
  children: PropTypes.element.isRequired,

  /** Accessible label, required when header is not present */
  'aria-label': function ariaLabel(props) {
    if (!props.headerContent && !props['aria-label']) {
      return new Error('aria-label is required when header is not used');
    }

    return null;
  },

  /** Header content, leave empty for no header */
  headerContent: PropTypes.node,

  /** Body content */
  bodyContent: PropTypes.node.isRequired,
  footerContent: PropTypes.node,

  /**
   * True to show the popover programmatically. Used in conjunction with the shouldClose prop.
   * By default, the popover child element handles click events automatically. If you want to control this programmatically,
   * the popover will not auto-close if the Close button is clicked, ESC key is used, or if a click occurs outside the popover.
   * Instead, the consumer is responsible for closing the popover themselves by adding a callback listener for the shouldClose prop.
   */
  isVisible: PropTypes.bool,

  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the popover Close button is
   * clicked or the ESC key is used
   */
  shouldClose: PropTypes.func,

  /** The element to append the popover to, defaults to body */
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
  hideOnOutsideClick: PropTypes.bool,

  /** Lifecycle function invoked when the popover begins to transition out. */
  onHide: PropTypes.func,

  /** Lifecycle function invoked when the popover has fully transitioned out. */
  onHidden: PropTypes.func,

  /** Lifecycle function invoked when the popover begins to transition in. */
  onShow: PropTypes.func,

  /** Lifecycle function invoked when the popover has fully transitioned in. */
  onShown: PropTypes.func,

  /** Lifecycle function invoked when the popover has been mounted to the DOM. */
  onMount: PropTypes.func,

  /** z-index of the popover */
  zIndex: PropTypes.number,

  /** Maximum width of the tooltip (default 18.75rem) */
  maxWidth: PropTypes.string,

  /** Aria label for the Close button */
  closeBtnAriaLabel: PropTypes.string
};
var defaultProps = {
  position: 'top',
  enableFlip: true,
  className: null,
  isVisible: null,
  shouldClose: function shouldClose() {
    return undefined;
  },
  'aria-label': '',
  headerContent: null,
  footerContent: null,
  appendTo: function appendTo() {
    return document.body;
  },
  hideOnOutsideClick: true,
  onHide: function onHide() {
    return undefined;
  },
  onHidden: function onHidden() {
    return undefined;
  },
  onShow: function onShow() {
    return undefined;
  },
  onShown: function onShown() {
    return undefined;
  },
  onMount: function onMount() {
    return undefined;
  },
  zIndex: 9999,
  maxWidth: popoverMaxWidth && popoverMaxWidth.value,
  closeBtnAriaLabel: 'Close'
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "hideOrNotify", function () {
      if (_this.props.isVisible === null) {
        // Handle closing
        _this.tip.hide();
      } else {
        // notify consumer
        _this.props.shouldClose(_this.tip);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscKeyClick", function (event) {
      if (event.keyCode === KEY_CODES.ESCAPE_KEY && _this.tip.state.isVisible) {
        _this.hideOrNotify();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "storeTippyInstance", function (tip) {
      _this.tip = tip;
    });

    _defineProperty(_assertThisInitialized(_this), "closePopover", function () {
      _this.hideOrNotify();
    });

    _defineProperty(_assertThisInitialized(_this), "hideAllPopovers", function () {
      document.querySelectorAll('.tippy-popper').forEach(function (popper) {
        popper._tippy && popper._tippy.hide();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHide", function (tip) {
      _this.state.isOpen && _this.setState({
        isOpen: false
      });
      return _this.props.onHide(tip);
    });

    _defineProperty(_assertThisInitialized(_this), "onHidden", function (tip) {
      return _this.props.onHidden(tip);
    });

    _defineProperty(_assertThisInitialized(_this), "onMount", function (tip) {
      return _this.props.onMount(tip);
    });

    _defineProperty(_assertThisInitialized(_this), "onShow", function (tip) {
      var _this$props = _this.props,
          hideOnOutsideClick = _this$props.hideOnOutsideClick,
          isVisible = _this$props.isVisible,
          onShow = _this$props.onShow; // hide all other open popovers first if events are managed by us

      !hideOnOutsideClick && isVisible === null && _this.hideAllPopovers();
      _this.state.isOpen === false && _this.setState({
        isOpen: true
      });
      return onShow(tip);
    });

    _defineProperty(_assertThisInitialized(_this), "onShown", function (tip) {
      return _this.props.onShown(tip);
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleEscKeyClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleEscKeyClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          position = _this$props2.position,
          enableFlip = _this$props2.enableFlip,
          children = _this$props2.children,
          className = _this$props2.className,
          ariaLabel = _this$props2['aria-label'],
          headerContent = _this$props2.headerContent,
          bodyContent = _this$props2.bodyContent,
          footerContent = _this$props2.footerContent,
          isVisible = _this$props2.isVisible,
          shouldClose = _this$props2.shouldClose,
          appendTo = _this$props2.appendTo,
          hideOnOutsideClick = _this$props2.hideOnOutsideClick,
          onHide = _this$props2.onHide,
          onHidden = _this$props2.onHidden,
          onShow = _this$props2.onShow,
          onShown = _this$props2.onShown,
          onMount = _this$props2.onMount,
          zIndex = _this$props2.zIndex,
          maxWidth = _this$props2.maxWidth,
          closeBtnAriaLabel = _this$props2.closeBtnAriaLabel,
          rest = _objectWithoutProperties(_this$props2, ["position", "enableFlip", "children", "className", "aria-label", "headerContent", "bodyContent", "footerContent", "isVisible", "shouldClose", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "maxWidth", "closeBtnAriaLabel"]);

      var content = React.createElement(GenerateId, null, function (randomId) {
        return _this2.state.isOpen && React.createElement(FocusTrap, {
          focusTrapOptions: {
            clickOutsideDeactivates: true
          }
        }, React.createElement("div", _extends({
          className: css(styles.popover, !enableFlip && getModifier(styles, position, styles.modifiers.top), className),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": headerContent ? undefined : ariaLabel,
          "aria-labelledby": headerContent ? "popover-".concat(randomId, "-header") : undefined,
          "aria-describedby": "popover-".concat(randomId, "-body")
        }, rest), React.createElement(PopoverArrow, null), React.createElement(PopoverContent, null, React.createElement(PopoverCloseButton, {
          onClose: _this2.closePopover,
          "aria-label": closeBtnAriaLabel
        }), headerContent && React.createElement(PopoverHeader, {
          id: "popover-".concat(randomId, "-header")
        }, headerContent), React.createElement(PopoverBody, {
          id: "popover-".concat(randomId, "-body")
        }, bodyContent), footerContent && React.createElement(PopoverFooter, null, footerContent))));
      });
      var handleEvents = isVisible === null;

      var shouldHideOnClick = function shouldHideOnClick() {
        if (handleEvents) {
          if (hideOnOutsideClick === true) {
            return true;
          }

          return 'toggle';
        }

        return false;
      };

      return React.createElement(Tippy, {
        onCreate: this.storeTippyInstance,
        maxWidth: maxWidth,
        zIndex: zIndex,
        appendTo: appendTo,
        content: content,
        lazy: true,
        trigger: handleEvents ? 'click' : 'manual',
        isVisible: isVisible,
        hideOnClick: shouldHideOnClick(),
        animateFill: false,
        theme: "pf-tippy",
        performance: true,
        interactive: true,
        interactiveBorder: 0,
        placement: position,
        distance: 25,
        flip: enableFlip,
        popperOptions: {
          modifiers: {
            preventOverflow: {
              enabled: enableFlip
            },
            hide: {
              enabled: enableFlip
            }
          }
        },
        onHide: this.onHide,
        onHidden: this.onHidden,
        onShow: this.onShow,
        onShown: this.onShown,
        onMount: this.onMount
      }, children);
    }
  }]);

  return Popover;
}(React.Component);

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
export default Popover;