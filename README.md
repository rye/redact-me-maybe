# redact-me-maybe

Monkey-patches the `String` class to add a `.redact` prototype function that randomly redacts your text.

Example:
```js
require('redact-me-maybe')

"Monkey-patches the `String` class to add a `.redact` prototype function that randomly redacts your text.".redact(0.7)
// returns 'Monkey-patches the `██████` class to add a `.redact` prototype function that randomly redacts ████ ████.'
```

<small>Please don't use this in production, though if you find an actual use-case I'll be super proud.</small>

## License

`redact-me-maybe` is released under the ISC license.
For more information, consult the `LICENSE` file located at the root of this repository.
