import closest from './closest';

export default function ancestors(ref, ufo, stop) {
  const elements = [];

  let node = ref;

  while (node = closest(node.parentNode, ufo, stop)) {
    elements.push(node);
  }

  return elements;
}
