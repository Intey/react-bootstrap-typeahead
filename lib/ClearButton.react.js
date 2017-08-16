'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CloseButton
 *
 * http://getbootstrap.com/css/#helper-classes-close
 */
var ClearButton = function ClearButton(_ref) {
  var bsSize = _ref.bsSize,
      className = _ref.className,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      'aria-label': 'Close',
      className: (0, _classnames2.default)('close', 'rbt-close', {
        'rbt-close-lg': bsSize === 'large' || bsSize === 'lg'
      }, className),
      onClick: function onClick(e) {
        e.stopPropagation();
        _onClick(e);
      },
      type: 'button' },
    _react2.default.createElement(
      'span',
      { 'aria-hidden': 'true' },
      '\xD7'
    ),
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      'Close'
    )
  );
};

ClearButton.displayName = 'ClearButton';
ClearButton.propTypes = {
  bsSize: _propTypes2.default.oneOf(['large', 'lg', 'small', 'sm'])
};

exports.default = ClearButton;