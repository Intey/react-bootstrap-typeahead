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

var _HintedInput = require('./HintedInput.react');

var _HintedInput2 = _interopRequireDefault(_HintedInput);

var _Token = require('./Token.react');

var _Token2 = _interopRequireDefault(_Token);

var _getOptionLabel = require('./utils/getOptionLabel');

var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

var _typeaheadInputContainer = require('./containers/typeaheadInputContainer');

var _typeaheadInputContainer2 = _interopRequireDefault(_typeaheadInputContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeaheadInput = function (_React$Component) {
  _inherits(TypeaheadInput, _React$Component);

  function TypeaheadInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TypeaheadInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TypeaheadInput.__proto__ || Object.getPrototypeOf(TypeaheadInput)).call.apply(_ref, [this].concat(args))), _this), _this._renderToken = function (option, idx) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          inputProps = _this$props.inputProps,
          labelKey = _this$props.labelKey,
          onRemove = _this$props.onRemove,
          renderToken = _this$props.renderToken;

      var onRemoveWrapped = function onRemoveWrapped() {
        return onRemove(option);
      };

      if (typeof renderToken === 'function') {
        return renderToken(option, onRemoveWrapped, idx);
      }

      return _react2.default.createElement(
        _Token2.default,
        {
          disabled: disabled,
          key: idx,
          onRemove: onRemoveWrapped,
          tabIndex: inputProps.tabIndex },
        (0, _getOptionLabel2.default)(option, labelKey)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TypeaheadInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          hintText = _props.hintText,
          inputRef = _props.inputRef,
          isFocused = _props.isFocused,
          multiple = _props.multiple,
          name = _props.name,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          placeholder = _props.placeholder,
          selected = _props.selected,
          value = _props.value;


      var inputProps = _extends({}, this.props.inputProps, {
        disabled: disabled,
        hintText: hintText,
        inputRef: inputRef,
        isFocused: isFocused,
        multiple: multiple,
        name: name || this.props.inputProps.name,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        placeholder: placeholder,
        value: value
      });

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rbt-input', { 'rbt-input-multi': multiple }) },
        multiple && selected.map(this._renderToken),
        _react2.default.createElement(_HintedInput2.default, inputProps)
      );
    }
  }]);

  return TypeaheadInput;
}(_react2.default.Component);

TypeaheadInput.propTypes = {
  /**
   * Provides a hook for customized rendering of tokens when multiple
   * selections are enabled.
   */
  renderToken: _propTypes2.default.func
};

exports.default = (0, _typeaheadInputContainer2.default)(TypeaheadInput);