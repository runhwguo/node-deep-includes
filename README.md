# node-deep-includes
node.js, array or object deep includes.

## usage

````
const deepIncludes = require('node-deep-includes');

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

deepIncludes(arr, 1); // true
deepIncludes(arr, 4); // false

// strict equal
deepIncludes(arr, '1'); // true
deepIncludes(arr, '1', {strict: true}); // false

deepIncludes(obj, {}); // false
deepIncludes(obj, {a: {}}); // false
deepIncludes(obj, {e: {f: 1}}); // true

deepIncludes(obj, null); // false