import toArray from 'lodash/toArray';

export default function (element, selector) {
  let children = toArray(element.children);

  // TODO ensure that toArray does not remove an empty array for undefined/null
  if (!children)
    return null;

  if (selector)
    children = children.filter((child) => child.matches(selector));

  return children;
}
