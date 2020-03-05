// DOING

snail = function(arrays) {
	return arrays.reduce(function(acc, element){
		console.log('debug', acc, element);
		if()
		return acc.concat(element);
	}, []);
}

console.log(snail([[1,2],[3,4]]));

/* THINKING HAT
 * 1 - 1 right - shape: dot 
 * 2 - 2 right, 2 left - shape: righty-laid U
 * 3 - 3 right, 2 down, 2 left, 1 up, 1 right - shape: lefty-laid U spiral 
 * 4 - 4 right, 3 down, 3 left, 2 up, 2 right, 2 left - shape: shape: righty-laid U spiral
 * 5 - 5 right, 4 down, 4 left, 3 up, 3 right, 2 down, 2 left, 1 up, 1 right shape: lefty-laid U spiral+
 * 6 - 6 right, 5 down, 5 left, 4 up, 4 right, 3 down, 3 left, 2 up, 2 right, 2 left
 */

/* TESTS
 * Test.assertDeepEquals(snail([[]]), []);
 * Test.assertDeepEquals(snail([[1]]), [1]);
 * Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
 * Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
 * Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
 */