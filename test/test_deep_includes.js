const deepIncludes = require('../'),
      assert       = require('tap');

const arr = [1, 2, 3, {a: 1, b: {c: 2}}];

const obj = {
  a: {
    c: 3,
    d: {
      e: {
        f: 1
      }
    }
  },
  b: 2,
  g: [4]
};

// array deepIncludes
assert.equal(deepIncludes(arr, 1), true);
assert.equal(deepIncludes(arr, 4), false);

assert.equal(deepIncludes(arr, '1'), true);
assert.equal(deepIncludes(arr, '1', {strict: true}), false);// strict equal

// object deepIncludes
assert.equal(deepIncludes(obj, {}), false);
assert.equal(deepIncludes(obj, {b: 2}), false);
assert.equal(deepIncludes(obj, {f: 1}), true);
assert.equal(deepIncludes(obj, {e: {f: 1}}), true);

assert.equal(deepIncludes(obj, null), false);
assert.equal(deepIncludes(obj, [4]), false);

// general equal
assert.equal(deepIncludes(1, null), false);
assert.equal(deepIncludes(1, 1), true);
assert.equal(deepIncludes(undefined, 1), false);
assert.equal(deepIncludes(null, null), true);