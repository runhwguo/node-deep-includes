# node-deep-includes
Array or Object deep includes.

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

// array deepIncludes
deepIncludes(arr, 1); // true
deepIncludes(arr, 4); // false

deepIncludes(arr, '1'); // true
deepIncludes(arr, '1', {strict: true}); // false strict equal

// object deepIncludes
deepIncludes(obj, {}); // false
deepIncludes(obj, {b: 2}); // false
deepIncludes(obj, {f: 1}); // true
deepIncludes(obj, {e: {f: 1}}); // true

deepIncludes(obj, null); // false
deepIncludes(obj, [4]); // false

// general equal
deepIncludes(1, null); // false
deepIncludes(1, 1); // true
deepIncludes(undefined, 1); // false
deepIncludes(null, null); // true