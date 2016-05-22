'use strict';

module.exports = function (element, str) {
  element.dispatchEvent(new Event(str, {
    'view': window,
    'bubbles': true,
    'cancelable': true
  }));
};
