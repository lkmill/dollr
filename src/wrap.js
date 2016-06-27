import appendTo from './appendTo';
import insertBefore from './insertBefore';
import $ from './dollr';

export default function wrap(element, ufo) {
  // TODO enable by tagName
  // TODO enable possibility of multilevel wrap. Such as <span><b><i></i></b></span>
  ufo = (ufo instanceof Element) ? ufo.cloneNode() : $(ufo);

  insertBefore(ufo, element);

  appendTo(element, ufo);
}
