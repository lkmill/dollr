'use strict';

const $$ = require('./dollr').$$;

module.exports = function prependTo(element, reference) {
  if (element instanceof Node) {
    if (reference.firstChild) {
      reference.insertBefore(element, reference.firstChild);
    } else {
      reference.appendChild(element);
    }
  } else {
    if (element instanceof NodeList || element instanceof HTMLCollection)
      element = $$(element);

    element.forEach(function (el) {
      if (reference.firstChild) {
        reference.insertBefore(el, reference.firstChild);
      } else {
        reference.appendChild(el);
      }
    });
  }
};
