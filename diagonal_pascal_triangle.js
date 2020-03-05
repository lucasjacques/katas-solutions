const diagonal = (n, p) => {
	if (p === 0) {
		return n+1;
	}

	const diagonals = [Array(n+1).fill(1)];
	for (let i = 1; i <= p; i++) {
		diagonals[i] = nextDiagonal(diagonals[i-1]);
	}
	return diagonals[p].reduce((acc,elem) => acc + elem);
}

const nextDiagonal = (previousDiagonal) => {
	const result = Array(previousDiagonal.length-1);
	for (var i = 0; i < result.length; i++) {
		result[i] = previousDiagonal[i] + result[i-1] || previousDiagonal[i];
	}
	return result;
}

console.log(diagonal(7, 1));