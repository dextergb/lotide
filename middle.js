const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const arr = [];
  if (array.length <= 2) {
    return arr;
  } else if (array.length % 2 === 0) {
    arr.push(array[middleIndex - 1]);
    arr.push(array[middleIndex]);
  } else {
    arr.push(array[middleIndex]);
  }
  return arr;
};

module.exports = middle;