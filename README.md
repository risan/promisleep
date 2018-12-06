# Promisleep

[![Build Status](https://badgen.net/travis/risan/promisleep)](https://travis-ci.org/risan/promisleep)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/promisleep)](https://codecov.io/gh/risan/promisleep)
[![Greenkeeper](https://badges.greenkeeper.io/risan/promisleep.svg)](https://greenkeeper.io)
[![Latest Version](https://badgen.net/npm/v/promisleep)](https://www.npmjs.com/package/promisleep)

Promise based sleep function for Node and browser.

## Installation

```bash
$ npm install promisleep
```

### CDN

The library is available over a CDN:

```html
<script src="https://unpkg.com/promisleep@latest/dist/promisleep.umd.js"></script>

<!-- Or the minified version -->
<script src="https://unpkg.com/promisleep@latest/dist/promisleep.umd.min.js"></script>
```

## Usage

```js
const promisleep = require("promisleep");

promisleep(3000)
  .then(() => console.log("⏰ Delayed for 3 seconds..."));
```

If you perfer to use the ES2016 `async/await` syntax:

```js
import promisleep from "promisleep";

const letMeSleep = async () => {
  console.log("😴 I'm gonna sleep for 3 seconds...");

  await promisleep(5000);

  console.log("⏰ I woke up after 5 seconds...");
}

letMeSleep();
```

## License

[MIT](https://github.com/risan/promisleep/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)
