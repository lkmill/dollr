import $$ from './dollrs';

export default function siblings(element, selector) {
  const children = $$(element.parentNode.children);
  const index = children.indexOf(element);

  return selector
    ? children.filter((el, i) => i !== index && el.matches(selector))
    : [...children.slice(0, index), ...children.slice(index + 1)];
}
