'use strict';

module.exports = function (element, selector) {
  let prev = element.previousSibling;

  while (prev && prev.nodeType !== 1)
    prev = prev.previousSibling;

  if (prev && selector && !prev.matches(selector))
    prev = undefined;

  return prev;
};
