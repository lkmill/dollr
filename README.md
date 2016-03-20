# dollr

dollr is a very simple, flexible and lightweight DOM helper library.

Lots more code coming soon.

## Why?

Because.

## Installation

```
npm install dollr
```

## Use

```js
import { $, $$ } from 'dollr';

$(() => console.log('dom ready'));

const main = $('main');

const page = $('.page', main)

if(page)
	page.classList.add('poo');

const divs = $$('div', main);
```

### $(fnc)

Sets an event listener on `DOMLoaded` event (just like jQuery).

### $(selector, context)

Wrapper around `document.querySelector`. Calls `context.querySelector(selector)`
if `context` is a node.

### $(node)

Returns node (only useful if you ain't sure what you got).

### $(nodeList || array || htmlCollection)

Will return the first element (if there is one). Ie `return nodeList[0]`.

### $$(selector, context)

Wrapper around `document.querySelectorAll`. Calls `context.querySelectorAll(selector)`
if `context` is a node.

### $$(nodeList || array || htmlCollection)

Converts argument to an array.
