import { $$ } from './dollr';

export default function (element, selector) {
  let children = element ? $$(element.children) : [];

  if (selector)
    children = children.filter((child) => child.matches(selector));

  return children;
}
