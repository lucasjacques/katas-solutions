// first attempt of solving a problem to find the current state of a given tic-tac-toe board
function isSolved(board) {
	let currentPlayers = [
		[Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)],
		[Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]
	];
	let hasZero = false;

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 0) {
				hasZero = true;
				continue;
			}
			if (board[i][j] === 1) {
				currentPlayers[0][i][j] = true;
				continue;
			}
			if (board[i][j] === 2) {
				currentPlayers[1][i][j] = true;
				continue;	
			}
		}
	}
	const winner = checkVictory(currentPlayers);
	if (winner) {
		return winner;
	}
	if (hasZero) {
		return -1;
	}
	return 0;
}

function checkVictory(players) {
	for (let p = players.length - 1; p >= 0; p--) {

		let columnMatch = Array(3).fill(0),
			diagonalMatch = Array(2).fill(0);
		for (let i = 0; i < players[p].length; i++) {
			let lineMatch = 0;
			for (let j = 0; j < players[p][i].length; j++) {
				if (players[p][i][j] === true) {
					columnMatch[j]++;
					lineMatch++;
					if (i === j) {
						diagonalMatch[0]++;
					}

					if ( (i + 2) === j || (j + 2) === i || (i===1 && j===1) ) {
						diagonalMatch[1]++;
					}

					if (lineMatch >= 3 || columnMatch[0] >= 3 || columnMatch[1] >= 3 || columnMatch[2] >= 3 || diagonalMatch[0] >= 3 || diagonalMatch[1] >= 3) {
						return p+1;
					}
				}
			}
		}
	}
	return false;
}

// second attempt to make it a little bit cleaner
function isSolvedCleaner(board) {
	let currentPlayers = {
		1: [],
		2: [],
		'playersCount': 2
	};
	let hasZero = false;

	currentPlayers[1] = board.map(boardRow => boardRow.map(spot => {
		if (spot === 0) {
			hasZero = true;
		}
		return spot === 1
	}));
	currentPlayers[2] = board.map(boardRow => boardRow.map(spot => spot === 2));

	const winner = checkVictory(currentPlayers);
	if (winner) {
		return winner;
	}
	if (hasZero) {
		return -1;
	}
	return 0;
}

function checkVictory(players) {
	for (let p = 1; p <= players.playersCount; p++) {
		let columnMatch = Array(3).fill(0),
			diagonalMatch = Array(2).fill(0);
		for (let i = 0; i < players[p].length; i++) {
			let lineMatch = 0;
			for (let j = 0; j <= players[p][i].length; j++) {
				if (players[p][i][j] === true) {
					columnMatch[j]++;
					lineMatch++;
					if (i === j) {
						diagonalMatch[0]++;
					}
					if ( (i + 2) === j || (j + 2) === i || (i===1 && j===1) ) {
						diagonalMatch[1]++;
					}

					if (lineMatch >= 3 || columnMatch[0] >= 3 || columnMatch[1] >= 3 || columnMatch[2] >= 3 || diagonalMatch[0] >= 3 || diagonalMatch[1] >= 3) {
						return p;
					}
				}
			}
		}
	}
	return false;
}


// third attempt, but this one was made by my friend (vieiralucas on GitHub)
const UNFINISHED = -1
const X_WON = 1
const O_WON = 2
const DRAW = 0

const sumArr = arr => arr.reduce((s, v) => s + v, 0)

const checkWinnerOfArr = arr => {  
  let xPositions = 0
  let oPositions = 0
  
  for (let item of arr) {
    if (item === 0) {
      return UNFINISHED
    }
    
    if (item === 1) {
      xPositions++
    }
    
    if (item === 2) {
      oPositions++
    }
  }
  
  if (xPositions === 3) {
    return X_WON
  }
  
  if (oPositions === 3) {
    return O_WON
  }
  
  return DRAW
}

const getCols = board => {
  const cols = []
  for (let i = 0; i < 3; i++) {
    cols.push([board[0][i], board[1][i], board[2][i]])
  }
  
  return cols
}

const getDiags = board => ([
  [board[0][0], board[1][1], board[2][2]],
  [board[0][2], board[1][1], board[2][0]]
])


const extractWinner = results => {
  let draws = 0
  for (let result of results) {
    if (result === X_WON || result === O_WON) {
      return result
    }
    
    if (result === DRAW) {
      draws++
    }
  }
  
  // In order to have a draw, every result must be a draw
  if (draws === results.length) {
    return DRAW
  }
  
  return UNFINISHED
}

const isSolvedByVieira = board => {
  return extractWinner([
  	extractWinner(board.map(checkWinnerOfArr)),
  	extractWinner(getCols(board).map(checkWinnerOfArr)),
  	extractWinner(getDiags(board).map(checkWinnerOfArr))
  ]);
}

console.log(isSolvedByVieira([[0,0,1],[0,1,2],[2,1,0]]))

/* TEST
	Test.expect(isSolved([[0,0,1],[0,1,2],[2,1,0]]) === -1);
*/