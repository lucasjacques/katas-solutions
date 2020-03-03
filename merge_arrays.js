function mergeArrays(a, b) {
	const biggest = a.length > b.length ? a.length : b.length;
	let result = [];

	for (let i = 0; i < biggest; i++) {
		if (i > a.length - 1) {
			result.push(b[i])
			continue;
		}
		if (i > b.length - 1) {
			result.push(a[i])
			continue;
		}
		result.push(a[i]);
		result.push(b[i]);
	}

	return result;
}

console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']));