export default function replaceWith(element, newElement) {
  this.parentNode.replaceChild(newElement, element)
}
