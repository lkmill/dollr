import { $$ } from './dollr';
import is from './is';

export default function closest(ref, ufo, stop) {
  function recurse(element) {
    if (!element || stop && is(element, stop) || element === document.documentElement) {
      return null;
    } else if (is(element, ufo)) {
      return element;
    }

    return recurse(element.parentNode);
  }

  if (ufo instanceof NodeList || ufo instanceof HTMLCollection) ufo = $$(ufo);

  return recurse(ref);
}
