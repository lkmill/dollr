import $$ from './dollrs';

// TODO implement after(nodeList)
export default function (element, reference) {
  if (reference.parentNode) {
    const next = reference.nextSibling;

    if (element instanceof Node) {
      if (next) reference.parentNode.insertBefore(element, next);
      else reference.parentNode.appendChild(element);
    } else {
      if (element instanceof NodeList || element instanceof HTMLCollection)
        element = $$(element);

      element.forEach(next ? function (el) {
        reference.parentNode.insertBefore(el, next);
      } : function (el) {
        reference.parentNode.appendChild(el);
      });
    }
  }
}
