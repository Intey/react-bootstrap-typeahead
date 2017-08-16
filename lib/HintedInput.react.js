'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputAutosize = require('react-input-autosize');

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {
  backgroundColor: 'transparent',
  border: 0,
  boxShadow: 'none',
  cursor: 'inherit',
  outline: 'none',
  padding: 0
};

var HintedInput = function (_React$Component) {
  _inherits(HintedInput, _React$Component);

  function HintedInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HintedInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HintedInput.__proto__ || Object.getPrototypeOf(HintedInput)).call.apply(_ref, [this].concat(args))), _this), _this._renderHint = function () {
      var _this$props = _this.props,
          hintText = _this$props.hintText,
          isFocused = _this$props.isFocused,
          multiple = _this$props.multiple;

      // TODO: Support hinting for multi-selection.

      return multiple ? null : _react2.default.createElement(_reactInputAutosize2.default, {
        inputClassName: 'rbt-input-hint',
        inputStyle: _extends({}, STYLES, {
          color: 'rgba(0, 0, 0, 0.35)'
        }),
        style: {
          bottom: 0,
          display: 'block',
          position: 'absolute',
          top: 0,
          zIndex: 0
        },
        tabIndex: -1,
        value: isFocused ? hintText : ''
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HintedInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          hintText = _props.hintText,
          inputRef = _props.inputRef,
          isFocused = _props.isFocused,
          props = _objectWithoutProperties(_props, ['className', 'hintText', 'inputRef', 'isFocused']);

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block', position: 'relative' } },
        _react2.default.createElement(_reactInputAutosize2.default, _extends({}, props, {
          autoComplete: 'off',
          inputClassName: (0, _classnames2.default)('rbt-input-main', className),
          inputStyle: STYLES,
          ref: inputRef,
          style: {
            position: 'relative',
            zIndex: 1
          }
        })),
        this._renderHint()
      );
    }
  }]);

  return HintedInput;
}(_react2.default.Component);

HintedInput.propTypes = {
  type: _propTypes2.default.string
};

HintedInput.defaultProps = {
  type: 'text'
};

exports.default = HintedInput;