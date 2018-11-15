'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grapesjs = require('grapesjs');

var _grapesjs2 = _interopRequireDefault(_grapesjs);

var _fastFluent = require('fast-fluent');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _grapesjs2.default.plugins.add('fluent-grapesjs', function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sm = editor.StorageManager;

  console.log(_fastFluent.Fluent.getConfig());
});