# Recursive Freeze

[![Latest Stable Version](https://img.shields.io/npm/v/promisleep.svg)](https://www.npmjs.com/package/promisleep)
[![Build Status](https://travis-ci.org/risan/promisleep.svg?branch=master)](https://travis-ci.org/risan/promisleep)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/promisleep)
[![License](https://img.shields.io/npm/l/promisleep.svg)](https://www.npmjs.com/package/promisleep)

A promise based sleep function for Node and browser.

## Install

You can install this package through NPM:

```bash
$ npm install promisleep
```

You can also use this library on browser. Simply load the UMD bundle like so:

```html
<!-- For development -->
<script src="https://unpkg.com/promisleep@latest/dist/promisleep.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/promisleep@latest/dist/promisleep.umd.min.js"></script>
```

## Usage

```js
const promisleep = require('promisleep');

promisleep(3000)
  .then(() => console.log('⏰ I woke up after 3 seconds...'));
```

## License

MIT © [Risan Bagja Pradana](https://risan.io)
