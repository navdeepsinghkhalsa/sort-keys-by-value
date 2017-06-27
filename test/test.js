const assert = require('assert');
const s = require('..');

const testObj = { a: 2, b: 2, c: 1, d: 3, e: 1, f: 1 };

describe('Sort Keys By Value', () => {
  it('sort the keys based on value in object', () => {
    assert.deepEqual(s(testObj), { c: 1, e: 1, f: 1, a: 2, b: 2, d: 3 });
  });

  it('reverse order', () => {
    assert.deepEqual(s(testObj, { reverse: true }), { d: 3, a: 2, b: 2, c: 1, e: 1, f: 1 });
  });

  it('reverse order and reverse key order', () => {
    assert.deepEqual(
      s(testObj,
        {
          reverse: true,
          reverseKey: true,
        }),
      { d: 3, b: 2, a: 2, f: 1, e: 1, c: 1 });
  });
});
