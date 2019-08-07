function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This Component can be used to wrap a functional component in order to generate a random ID
 * Example of how to use this component
 *
 * const Component = ({id}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
 *  );
 *
 * Component.propTypes = {
 *  id: PropTypes.string
 * }
 */
import React from 'react';
import PropTypes from 'prop-types';
var currentId = 0;
var propTypes = {
  /** String to prefix the random id with */
  prefix: PropTypes.string,

  /** Component to be rendered with the generated id */
  children: PropTypes.func.isRequired
};

var GenerateId =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GenerateId, _React$Component);

  function GenerateId() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GenerateId);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GenerateId)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.prefix).concat(currentId++));

    return _this;
  }

  _createClass(GenerateId, [{
    key: "render",
    value: function render() {
      return this.props.children(this.id);
    }
  }]);

  return GenerateId;
}(React.Component);

_defineProperty(GenerateId, "defaultProps", {
  prefix: 'pf-random-id-'
});

_defineProperty(GenerateId, "propTypes", propTypes);

export default GenerateId;