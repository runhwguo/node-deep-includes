# node-deep-includes
node.js, array or object deep includes.

## use

const deepIncludes = require('../'),
      assert       = require('tap');

const arr = [1, 2, 3];

const obj = {
  a: {
    c: 3,
    d: {
      e: {
        f: 1
      }
    }
  },
  b: 2
};

assert.equal(deepIncludes(arr, 1), true);
assert.equal(deepIncludes(arr, 4), false);

// strict equal
assert.equal(deepIncludes(arr, '1'), true);
assert.equal(deepIncludes(arr, '1', {strict: true}), false);

assert.equal(deepIncludes(obj, {}), false);
assert.equal(deepIncludes(obj, {a: {}}), false);
assert.equal(deepIncludes(obj, {e: {f: 1}}), true);

assert.equal(deepIncludes(obj, null), false);
