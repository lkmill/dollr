export default function prev(element, selector) {
  let prevElement = element.previousSibling;

  while (prevElement && prevElement.nodeType !== 1) {
    prevElement = prevElement.previousSibling;
  }

  if (prevElement && selector && !prevElement.matches(selector)) {
    prevElement = undefined;
  }

  return prevElement;
}
