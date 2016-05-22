'use strict';

const $$ = require('./dollr').$$;

module.exports = function (elements, selector) {
  elements = $$(elements);

  return elements.reduce((result, element) => result + element.textContent.trim(), '');
};
