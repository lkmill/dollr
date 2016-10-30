import $ from './dollr';
import offset from './offset';
import scrollTo from './scrollTo';

export default function scrollIntoView(el, duration, speed) {
  if (typeof el === 'string') el = $(el);

  const topPadding = parseInt(getComputedStyle(document.body).paddingTop, 10);

  const absoluteOffset = offset(el).top - topPadding;

  scrollTo(0, absoluteOffset, duration, speed);
}
