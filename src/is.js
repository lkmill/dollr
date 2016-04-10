'use strict';

const includes = require('lodash/includes');

// tests
module.exports = function is(element, ufo) {
	return (!ufo || typeof ufo === 'string' && element.matches && element.matches(ufo)) ||
		((ufo instanceof Node) && element === ufo) ||
		((ufo instanceof Array) && includes(ufo, element));
};
