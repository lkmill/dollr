/*
 * Used by next(), prev(), first() and last()
 *
 * @module dollr/_iterate
 */

const excludedTags = ['SCRIPT', 'STYLE']

export default function iterate(selector, node, iteratorProperty) {
  while (node) {
    if (node.nodeType === 1 && excludedTags.indexOf(node.nodeName) === -1) {
      if (!selector || node.matches(selector)) break

      node = null
    } else {
      node = node[iteratorProperty]
    }
  }
  return node
}
