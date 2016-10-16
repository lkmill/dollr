import insertBefore from './insertBefore';

export default function unwrap(element) {
  const parent = element.parentNode;

  while (parent.firstChild) {
    insertBefore(parent.firstChild, parent);
  }

  parent.remove();
}
