export default function next(element, selector) {
  let nextElement = element.nextSibling;

  while (nextElement && nextElement.nodeType !== 1) {
    nextElement = nextElement.nextSibling;
  }

  if (nextElement && selector && !nextElement.matches(selector)) {
    nextElement = undefined;
  }

  return nextElement;
}
