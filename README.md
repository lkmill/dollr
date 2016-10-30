# dollr

dollr is a very simple, flexible and lightweight DOM helper library.

## Why?

While there is seldom an actual real use for jQuery these days, there
are still a large amount of websites that are too simple for using a framework
but too complex to write in vanilla JavaScript.

dollr is a collection of useful DOM querying and manipulation methods that most
often try to emulate their jQuery counterparts. However, instead of always
loading the entire library, dollr is solely built to work with bundlers such as
[Rollup](https://github.com/rollup/rollup) or
[Webpack](https://github.com/webpack). Thus, it allows you to pick the
functionality needed, and only bundle that.

dollr does not aim to be backwards compatible; the main goal is to make each
isolated module and the package as a whole as light as possible. Proper shims
are required for dollr to function in legacy browsers.

## Installation

```
$ npm install dollr
```

## Use

dollr is intended to be used with a bundler, such as
[Rollup](https://github.com/rollup/rollup),
[Webpack](https://github.com/webpack/webpack) or
[Browserify](https://github.com/substack/node-browserify).

### ES2015 Modules

If using ES2015 aware modules, simply use import statements on
`'dollr'`, ie:

```js
import { $, $$, appendTo } from 'dollr';
```

There is no default export, and 

```js
import * as $  from 'dollr';
```

Gives you an object with all available methods, ie:

```js
import * as $  from 'dollr';

const main = $.$('main');

$.appendTo($.$$('<p>One</p><p>Two</p>'), main);
```

### CommonJS

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

## Available Methods

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

## No Chaining

Since no special objects are created and each function
takes the element as an argument, chaining is not possible
in dollr.

## No AJAX

jQuery's AJAX functionality is not available in dollr. Instead, we recommend
using the [Fetch
API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with the
[appropriate polyfill](https://github.com/github/fetch) for legacy browsers.

## Methods Description

This is currently an __inexhaustive__ list of descriptions of how the methods
provided by dollr work.

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
