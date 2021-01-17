function duplicateCount(text){
	const arrayed = text.split('');
	let cache = {};
	return arrayed.reduce(function (acc, elem) {
		elem = elem.toLowerCase();
		if (cache[elem] === undefined) {
			cache[elem] = null;
			return acc;
		}

		if (cache[elem] === null) {
			cache[elem] = 1;
			return ++acc;
		}
		
		if (cache[elem] === 1) {
			return acc;
		}
		return acc;
	}, 0);
}

console.log(duplicateCount('sHould ignore CaSe'));