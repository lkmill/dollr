'use strict';

function $(ufo, context) {
	if (typeof ufo === 'string') {
		// if it seems to be HTML, create an element
		if (/^\s*</.test(ufo))
			return create(ufo)[0];

		if (context)
			return $(context).querySelector(ufo);

		return document.querySelector(ufo);
	} else if ((ufo instanceof NodeList || ufo instanceof Array || ufo instanceof HTMLCollection) && ufo.length > 0) {
		return ufo[0];
	} else if (ufo instanceof Node) {
		return ufo;
	} else if (ufo instanceof Function) {
		document.addEventListener('DOMContentLoaded', func, false);
	}

	return null;
}

function $$(ufo, context) {
	if (typeof ufo === 'string') {
		// if it seems to be HTML, create an elements
		if (/^\s*</.test(ufo))
			return create(ufo);

		if (context)
			return $(context).querySelectorAll(ufo);

		return document.querySelectorAll(ufo);
	} else if (ufo instanceof Node) {
		return $$([ufo]);
	} else if (ufo instanceof Array) {
		return ufo;
	} else if (ufo instanceof NodeList || ufo instanceof HTMLCollection) {
		return Array.prototype.slice.call(ufo);
	}

	return null;
}

function create(htmlString) {
	// TODO either format htmlString or make sure no empty text nodes have been created
	const container = document.createElement('div');

	container.innerHTML = htmlString;

	return container.childNodes;
}

module.exports = {
	$,
	$$
};
