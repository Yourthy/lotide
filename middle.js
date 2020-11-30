  const middle = function(array) {
    let result = [];
    if (array.length <= 2) {
      return result;
    } else if (array.length % 2 === 0) {
      result.push(array[array.length / 2 - 1], array[array.length / 2]);
    } else {
      result.push(array[Math.round((array.length - 1) / 2)]);
    }
    return result;
  };

module.exports = middle;
