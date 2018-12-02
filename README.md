# Promisleep

[![Build Status](https://flat.badgen.net/travis/risan/promisleep)](https://travis-ci.org/risan/promisleep)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/promisleep)](https://codeclimate.com/github/risan/promisleep)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/promisleep)](https://codeclimate.com/github/risan/promisleep)
[![Latest Stable Version](https://flat.badgen.net/npm/v/promisleep)](https://www.npmjs.com/package/promisleep)
[![Node Version](https://flat.badgen.net/npm/node/promisleep)](https://www.npmjs.com/package/promisleep)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/promisleep)](https://github.com/risan/promisleep/blob/master/LICENSE)

Promise based sleep function for Node and browser.

## Install

```bash
$ npm install promisleep

# Or if you use Yarn
$ yarn add promisleep
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/promisleep@latest/dist/promisleep.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/promisleep@latest/dist/promisleep.umd.min.js"></script>
```

## Quick Start

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

MIT © [Risan Bagja Pradana](https://bagja.net)
