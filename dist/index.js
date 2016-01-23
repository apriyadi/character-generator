'use strict';

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _names = require('./names.json');

var _names2 = _interopRequireDefault(_names);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(_names2.default);

module.exports = {
	all: _names2.default,
	random: random
};

function random(number) {
	// body...
	if (number === undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];

		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}
