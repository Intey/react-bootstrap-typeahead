'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head2 = require('lodash/head');

var _head3 = _interopRequireDefault(_head2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _getHintText = require('../utils/getHintText');

var _getHintText2 = _interopRequireDefault(_getHintText);

var _getInputText = require('../utils/getInputText');

var _getInputText2 = _interopRequireDefault(_getInputText);

var _keyCode = require('../utils/keyCode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function typeaheadInputContainer(Input) {
  var WrappedInput = function (_React$Component) {
    _inherits(WrappedInput, _React$Component);

    function WrappedInput() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, WrappedInput);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrappedInput.__proto__ || Object.getPrototypeOf(WrappedInput)).call.apply(_ref, [this].concat(args))), _this), _this._handleChange = function (e) {
        var _this$props = _this.props,
            multiple = _this$props.multiple,
            onChange = _this$props.onChange,
            onRemove = _this$props.onRemove,
            selected = _this$props.selected;


        if (!multiple) {
          // Clear any selections when text is entered.
          !!selected.length && onRemove((0, _head3.default)(selected));
        }

        onChange(e.target.value);
      }, _this._handleKeyDown = function (e) {
        var _this$props2 = _this.props,
            activeItem = _this$props2.activeItem,
            initialItem = _this$props2.initialItem,
            isFocused = _this$props2.isFocused,
            multiple = _this$props2.multiple,
            onAdd = _this$props2.onAdd,
            selected = _this$props2.selected,
            selectHintOnEnter = _this$props2.selectHintOnEnter;


        var inputNode = void 0;
        var value = (0, _getInputText2.default)(_this.props);

        switch (e.keyCode) {
          case _keyCode.BACKSPACE:
            if (!multiple) {
              break;
            }

            inputNode = (0, _reactDom.findDOMNode)(_this._input);
            if (inputNode && inputNode.contains(document.activeElement) && !value) {
              // If the input is selected and there is no text, select the last
              // token when the user hits backspace.
              var sibling = inputNode.parentElement.previousSibling;
              sibling && sibling.focus();

              // Prevent browser "back" action.
              e.preventDefault();
            }
            break;
          case _keyCode.RETURN:
          case _keyCode.RIGHT:
          case _keyCode.TAB:
            // TODO: Support hinting for multi-selection.
            if (multiple) {
              break;
            }

            inputNode = (0, _reactDom.findDOMNode)(_this._input.getInput());
            var cursorPos = inputNode && inputNode.selectionStart;
            var hintText = (0, _getHintText2.default)(_this.props);

            // Autocomplete the selection if all of the following are true:
            if (isFocused && (
            // There's a hint or a menu item is highlighted.
            hintText || activeItem) &&
            // There's no current selection.
            !selected.length &&
            // The input cursor is at the end of the text string when the user
            // hits the right arrow key.
            !(e.keyCode === _keyCode.RIGHT && cursorPos !== value.length) && !(e.keyCode === _keyCode.RETURN && !selectHintOnEnter)) {
              e.preventDefault();

              var selectedOption = hintText ? initialItem : activeItem;

              onAdd && onAdd(selectedOption);
            }
            break;
        }

        _this.props.onKeyDown(e);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WrappedInput, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            placeholder = _props.placeholder,
            selected = _props.selected;


        return _react2.default.createElement(Input, _extends({}, this.props, this.state, {
          hintText: (0, _getHintText2.default)(this.props),
          inputRef: function inputRef(input) {
            return _this2._input = input;
          },
          onChange: this._handleChange,
          onKeyDown: this._handleKeyDown,
          placeholder: selected.length ? null : placeholder,
          value: (0, _getInputText2.default)(this.props)
        }));
      }
    }, {
      key: 'getInputNode',
      value: function getInputNode() {
        return this._input.getInput();
      }
    }]);

    return WrappedInput;
  }(_react2.default.Component);

  return WrappedInput;
}

exports.default = typeaheadInputContainer;