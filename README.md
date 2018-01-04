# Recursive Freeze

[![Latest Stable Version](https://img.shields.io/npm/v/promisleep.svg)](https://www.npmjs.com/package/promisleep)
[![Build Status](https://travis-ci.org/risan/promisleep.svg?branch=master)](https://travis-ci.org/risan/promisleep)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d454a7caf74e1cc59ec6/test_coverage)](https://codeclimate.com/github/risan/promisleep/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/d454a7caf74e1cc59ec6/maintainability)](https://codeclimate.com/github/risan/promisleep/maintainability)
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

Or if you perfer to use ES2016 `async/await` instead:

```js
import promisleep from 'promisleep';

const letMeSleep = async () => {
  console.log("😴 I'm gonna sleep for 3 seconds...")
  await promisleep(3000);
  console.log('⏰ I woke up after 3 seconds...');
}

letMeSleep();
```

## License

MIT © [Risan Bagja Pradana](https://risan.io)

This package is inspired from [Addy Osmani](https://www.facebook.com/addyosmaniofficial)'s coding tips on [Facebook](https://www.facebook.com/addyosmaniofficial/photos/a.10151435123819601.1073741825.129712729600/10155386406924601/?type=3&theater).
