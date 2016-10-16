import $$ from './dollrs';

export default function prevAll(element, selector) {
  const siblings = $$(element.parentNode.children);

  let prev = siblings.slice(0, siblings.indexOf(element));

  if (selector) {
    prev = prev.filter((el) => el.matches(selector));
  }

  return prev;
}
