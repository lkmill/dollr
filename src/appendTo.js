'use strict';

const $$ = require('./dollr').$$;

// TODO implement after(nodeList)
module.exports = function (element, reference) {
  if (reference.parentNode) {
    if (element instanceof Node) {
      reference.appendChild(element);
    } else {
      if (element instanceof NodeList || element instanceof HTMLCollection)
        element = $$(element);

      element.forEach(function (el) {
        reference.appendChild(el);
      });
    }
  }
};
