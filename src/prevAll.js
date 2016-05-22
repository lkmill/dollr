'use strict';

const $$ = require('./dollr').$$;

module.exports = function (element, selector) {
  const siblings = $$(element.parentNode.children);

  let prev = siblings.slice(0, siblings.indexOf(element));

  if (selector)
    prev = prev.filter(function (el) {
      return el.matches(selector);
    });

  return prev;
};
