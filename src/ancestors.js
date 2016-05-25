import closest from './closest';

export default function (ref, ufo, stop) {
  const ancestors = [];

  let node = ref;

  while (node = closest(node.parentNode, ufo, stop)) {
    ancestors.push(node);
  }

  return ancestors;
}
