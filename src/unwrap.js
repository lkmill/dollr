'use strict';

const insertBefore = require('./insertBefore');

module.exports = function unwrap(element) {
  const parent = element.parentNode;

  while (parent.firstChild) {
    insertBefore(parent.firstChild, parent);
  }

  parent.remove();
};
