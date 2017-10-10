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
    } else {

    }
  }
  return false;
}

function deepIncludes(actual, expected, opt = {}) {
  if (Array.isArray(actual)) {
    return actual.some(item => {
      return equal(item, expected, opt);
    })
  } else if (isObject(actual)) {
    if (isObject(expected)) {
      return _deepTraverseObj(actual, expected);
    } else {
      console.warn('actual is object, expected also should be object and not null!, but expected=', expected);
      return false;
    }
  } else {
    return equal(actual, expected, opt);
  }
}

module.exports = deepIncludes;