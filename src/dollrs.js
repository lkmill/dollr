import create from './create';

export default function $$(ufo, context) {
  if (typeof ufo === 'string') {
    // if it seems to be HTML, create an elements
    if (/^\s*</.test(ufo))
      return create(ufo);

    if (context)
      return $$(context).reduce((result, element) => result.concat($$(element.querySelectorAll(ufo))), []);

    return $$(document.querySelectorAll(ufo));
  } else if (ufo instanceof Node) {
    return [ufo];
  } else if (ufo instanceof Array) {
    return ufo;
  } else if (ufo instanceof NodeList || ufo instanceof HTMLCollection) {
    return Array.prototype.slice.call(ufo);
  }

  return [];
}
