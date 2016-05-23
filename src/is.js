import includes from 'lodash/includes';

// tests
export default function is(element, ufo) {
  return (!ufo || typeof ufo === 'string' && element.matches && element.matches(ufo)) ||
    ((ufo instanceof Node) && element === ufo) ||
    (ufo.length && includes(ufo, element));
}
