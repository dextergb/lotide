const tail = function(array) {
  // let result = [];
  // for (let i = 1; i < array.length; i++) {
  //   result.push(array[i]);
  // }
  // return result;
  return array.slice(1);
};

module.exports = tail;