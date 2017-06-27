# sort-keys-by-value [![Build Status](https://travis-ci.org/navdeepsinghkhalsa/sort-keys-by-value.svg?branch=master)](https://travis-ci.org/navdeepsinghkhalsa/sort-keys-by-value)

> Sort keys in an object by the value of the property

## Install

```
$ npm install --save sort-keys-by-value
```


## Usage

```js
const sortKeysByValue = require('sort-keys-by-value');

sortKeysByValue({ a: 2, b: 2, c: 1, d: 3 });
//=> { c: 1, a: 2, b: 2, d: 3 }

sortKeysByValue({ a: 2, b: 2, c: 1, d: 3 }, { reverse: true });
//=> { d: 3, a: 2, b: 2, c: 1 }

sortKeysByValue({ a: 2, b: 2, c: 1, d: 3 }, { reverse: true, reverseKey: true });
//=> { d: 3, b: 2, a: 2, c: 1 }
```


## API

### sortKeysByValue(input, [options])

Returns a new object with sorted keys based on value of properties.

#### input

Type: `Object`

#### options

##### reverse

Type: `boolean`

Sorts by descending value of property

##### reverseKey

Type: `boolean`

Where two properties have the same value, sort the keys in reverse order

## License

ISC © Navdeep Singh
