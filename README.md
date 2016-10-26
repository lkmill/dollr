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

## ES2015 Modules

If using ES2015 aware modules, simply use import statements on
`'dollr'`, ie:

```js
import { $, $$, appendTo } from 'dollr';
```

## CommonJS

If you are using CommonJS bundlers you should explicitly import needed modules
to prevent the whole library being required, ie:

```js
const $ = require('dollr/dollr')
const $$ = require('dollr/dollrs');
const appendTo = require('dollr/appendTo');
```

Small example:

```js
import { $, $$ } from 'dollr';

$(() => console.log('dom ready'));

const main = $('main');

const page = $('.page', main);

if(page) {
	page.classList.add('poo');
}

const divs = $$('div', main);
```

Available functions are:

+ ancestors
+ append
+ appendTo
+ children
+ closest
+ create
+ descendants
+ dollr.js (referred to as `$`)
+ dollrs.js (referred to as `$$`)
+ empty
+ index
+ insertAfter
+ insertBefore
+ is
+ \_iterate
+ nextAll
+ next
+ off
+ on
+ prependTo
+ prevAll
+ prev
+ replaceWith
+ siblings
+ text
+ trigger
+ unwrap
+ \_without
+ wrap

## Methods Overview

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
