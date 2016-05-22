'use strict';

const appendTo = require('./appendTo'),
  insertAfter = require('./insertAfter'),
  $ = require('./dollr').$;

module.exports = function wrap(element, ufo) {
	// TODO enable by tagName
	// TODO enable possibility of multilevel wrap. Such as <span><b><i></i></b></span>
	ufo = (ufo instanceof Element) ? ufo.cloneNode() : $(ufo);

  insertBefore(ufo, element);

  appendTo(element, ufo);
};
