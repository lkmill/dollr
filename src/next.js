export default function (element, selector) {
  let next = element.nextSibling

  while (next && next.nodeType !== 1)
    next = next.nextSibling

  if (next && selector && !next.matches(selector))
    next = undefined

  return next
}
