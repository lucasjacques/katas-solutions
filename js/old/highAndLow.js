function highAndLow(numbers){
	const arrayed = numbers.split(' ');

	if (arrayed.length === 1) {
		return `${arrayed[0]} ${arrayed[0]}`;
	}

	let result = {min:parseInt(arrayed[0]), max: parseInt(arrayed[1])}
	arrayed.filter(function (elem) {
		elem = parseInt(elem);
		if (elem < result.min) {
			result.min = elem;
			return;
		}
		if (elem > result.max) {
			result.max = elem;
			return;
		}
		return;
	});

	return `${result.max} ${result.min}`;
}

function highAndLowFor(numbers) {
	const arrayed = numbers.split(' ');
	
	if (arrayed.length === 1) {
		return `${arrayed[0]} ${arrayed[0]}`;
	}

	let result = {min: parseInt(arrayed[0]), max: parseInt(arrayed[1])};
	for (elem of arrayed) {
		elem = parseInt(elem);
		if (elem < result.min) {
			result.min = elem;
			continue;
		}
		if (elem > result.max) {
			result.max = elem;
		}
	}

	return `${result.max} ${result.min}`;
}

function highAndLowReduce(numbers){
	const arrayed = numbers.split(' ');

	if (arrayed.length === 1) {
		return `${arrayed[0]} ${arrayed[0]}`;
	}

	return Object.values(arrayed.reduce(function (acc, elem) {
		elem = parseInt(elem);
		if (elem < acc.min) {
			acc.min = elem;
			return acc;
		}
		if (elem > acc.max) {
			acc.max = elem;
			return acc;
		}
		return acc;
	}, {max: parseInt(arrayed[1]), min: parseInt(arrayed[0])})).
	join(' ');
}

function highAndLowReducePrettier(numbers){
	const arrayed = numbers.split(' ');

	if (arrayed.length === 1) {
		return `${arrayed[0]} ${arrayed[0]}`;
	}

	let result = arrayed.reduce(function (acc, elem) {
		elem = parseInt(elem);
		if (elem < acc.min) {
			acc.min = elem;
			return acc;
		}
		if (elem > acc.max) {
			acc.max = elem;
			return acc;
		}
		return acc;
	}, {min: parseInt(arrayed[0]), max: parseInt(arrayed[1])});

	return `${result.max} ${result.min}`;
}

console.log(highAndLowReduce("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
/* TESTS
 * Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
 *
 *
 */