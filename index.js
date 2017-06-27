const isPlainObj = require('is-plain-obj');

module.exports = (obj, opts) => {
  if (!isPlainObj(obj)) {
    throw new TypeError('Expected a plain object');
  }

  const options = opts || {};
  const reverse = options.reverse;
  const reverseKey = options.reverseKey;

  const sortKeysByValue = (x) => {
    const sortable = [];
    const newObj = {};

    Object.keys(x).forEach((key) => {
      sortable.push([key, x[key]]);
    });

    sortable.sort((a, b) => {
      let ord;
      if (reverse) {
        ord = b[1] - a[1];
      } else {
        ord = a[1] - b[1];
      }
      if (ord === 0) {
        if (reverseKey) {
          ord = b[0].localeCompare(a[0]);
        } else {
          ord = a[0].localeCompare(b[0]);
        }
      }
      return ord;
    });

    sortable.forEach((arr) => {
      newObj[arr[0]] = arr[1];
    });

    return newObj;
  };

  return sortKeysByValue(obj);
};
