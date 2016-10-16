import $$ from './dollrs';

export default function text(elements) {
  elements = $$(elements);

  return elements.reduce((result, element) => result + element.textContent.trim(), '');
}
