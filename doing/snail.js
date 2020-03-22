// DOING

const RIGHT_DIRECTION = 0, DOWN_DIRECTION = 1, LEFT_DIRECTION = 2, UP_DIRECTION = 3;

const snail = snailMap => {
	const currentSnail = {
		position : [0,0],
		direction : RIGHT_DIRECTION,
		trail : [],
		currentMap : snailMap
	};

	const goalLength = currentSnail.currentMap.reduce(function(acc, element){
		return acc.concat(element);
	}, []).length;

	while (currentSnail.trail.length < goalLength) {
		switch (currentSnail.direction) {
			case RIGHT_DIRECTION:
				goRight(currentSnail);
				break;
			case DOWN_DIRECTION:
				goDown(currentSnail);
				break;
			case LEFT_DIRECTION:
				goLeft(currentSnail);
				break;
			case UP_DIRECTION:
				goUp(currentSnail);
				break;
		}

		currentSnail.direction = ++currentSnail.direction % 4;
	}
	return currentSnail.trail;
}

const goRight = currentSnail => {
	console.log('RIGHT_DIRECTION');
	const movementTrail = currentSnail.currentMap[0];
	currentSnail.trail = currentSnail.trail.concat(movementTrail);
	currentSnail.currentMap.shift();
}

const goDown = currentSnail => {
	console.log('DOWN_DIRECTION');
	const movementTrail = getColumn(currentSnail.currentMap);
	currentSnail.trail = currentSnail.trail.concat(movementTrail);
}

const goLeft = currentSnail => {
	console.log('LEFT_DIRECTION');
}

const goUp = currentSnail => {
	console.log('UP_DIRECTION');
}


const getColumn = matrix => {
	return matrix.map(elem => {
		return elem.pop();
	});
}

console.log(snail([[1,2],[3,4,5,6,7,8]]));

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