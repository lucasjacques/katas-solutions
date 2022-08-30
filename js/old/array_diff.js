function array_diff(a, b) {
  let result = a;
  for(let i=0; i < b.length; i++) {
    result = result.filter(function(value) {
        return value != b[i];
    });
  }
  return result;
}

console.log(array_diff([1,2,3,4,5], [1,2,3,5]));