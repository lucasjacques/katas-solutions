const assert = require('assert');

function repeats(numbers) {
	let result = 0
	for (let index = 0, cache = {}; index < numbers.length; index++) {
		const numberValue = numbers[index]
		if ( !cache[numberValue] ) {
			cache[numberValue] = 1
			result += numberValue
		}
		else {
			cache[numberValue]++
			if ( cache[numberValue] === 2 ) {
				result -= numberValue
			}
		}
	}
	return result;
}

assert.strictEqual(repeats([4,5,7,5,4,8]),15, 'Test failed');
assert.strictEqual(repeats([9, 10, 19, 13, 19, 13]),19, 'Test failed');
assert.strictEqual(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12, 'Test failed');
assert.strictEqual(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22, 'Test failed');
assert.strictEqual(repeats([5, 10, 19, 13, 10, 13]),24, 'Test failed');
console.log('All tests passed!')