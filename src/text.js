import $$ from './dollrs'

export default function (elements, selector) {
  elements = $$(elements)

  return elements.reduce((result, element) => result + element.textContent.trim(), '')
}
