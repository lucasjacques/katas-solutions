function firstNonConsecutive (arr) {
	if (arr.length < 2) {
		return null;
	}

	let cache = [arr[0]];
	let filtered = arr.filter(function (elem, index) {
		if (index === 0){
			return false;
		}
		if (elem === cache[index-1]+1 ) {
			cache[index] = elem;
			return false;
		}
		else {
			cache[index] = elem;
			return true;
		}
	}, arr[0]);

	return filtered[0] !== undefined ? filtered[0] : null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
/*
Test.describe('a simple example', function() {
  const first = firstNonConsecutive([1,2,3,4,6,7,8])
  Test.assertEquals(first, 6)
})
*/