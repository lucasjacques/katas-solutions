function findNextSquare(sq) {
  let result = Math.sqrt(sq);
  if (result === Math.floor(result)){
  	return Math.pow(result+1, 2);
  }
  return -1;
}

console.log(findNextSquare(625));
// TESTS
//	findNextSquare(121), 144);
//	findNextSquare(625), 676);
//	findNextSquare(319225), 320356);
//	findNextSquare(15241383936), 15241630849);
//	findNextSquare(155), -1);
//	findNextSquare(342786627), -1);
