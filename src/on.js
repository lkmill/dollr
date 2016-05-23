import { $$ } from './dollr';

function addEvent(element, event, listener, params) {
  if (params) {
    listener = listener.bind.apply(listener, [ element ].concat(params));
    // TODO test this
  }

  element.addEventListener(event, listener, false);

  if (!element.__events)
    element.__events = {};

  if (!element.__events[event])
    element.__events[event] = [];

  element.__events[event].push(listener);
}

export default function on(elements, eventString, listener, params) {
  const events = eventString.split(' ');

  events.forEach((event) => {
    $$(elements).forEach((element) => addEvent(element, event, listener, params));
  });

  return this;
}
