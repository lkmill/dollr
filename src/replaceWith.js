'use strict';

module.exports = function replaceWith(element, newElement) {
  this.parentNode.replaceChild(newElement, element);
};
