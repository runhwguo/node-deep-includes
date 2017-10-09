const isObject = require('isobject'),
      equal    = require('deep-equal');

function _deepTraverseObj(obj, expected) {
  if (equal(obj, expected)) {
    return true;
  }

  for (const value of Object.values(obj)) {
    if (isObject(value)) {
      if (_deepTraverseObj(value, expected)) {
        return true;
      }
    }
  }
  return false;
}

function deepIncludes(container, expected, opt) {
  if (Array.isArray(container)) {
    return container.some(item => {
      return equal(item, expected, opt);
    })
  } else if (isObject(container)) {
    return _deepTraverseObj(container, expected);
  } else {
    throw Error('params is illegal, should be array or object');
  }
}

module.exports = deepIncludes;