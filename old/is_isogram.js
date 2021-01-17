function isIsogram(str){
  const cache = {};

  for (var i = 0; i < str.length; i++) {
  	const lowCasedLetter = str[i].toLowerCase();
  	if (cache[lowCasedLetter] === undefined) {
  		cache[lowCasedLetter] = 1;
  	}
  	else {
  		return false;
  	}
  }
  return true;
}

function isIsogramReduce(str) {
	const cache = {},
		arrayed = str.split('');

	repeatedLetters = arrayed.reduce( (accum, currentValue) => {
		currentValue = currentValue.toLowerCase();
		if (cache[currentValue] === undefined) {
			cache[currentValue] = 1;
			return accum;
		}
		else {
			return accum + 1;
		}
	}, 0);
	return repeatedLetters === 0 ? true : false;
}

console.log(isIsogramReduce('isIsogram'));
/* TESTS
 * isIsogram("Dermatoglyphics"), true
 * isIsogram("isogram"), true
 * isIsogram("aba"), false, "same chars may not be adjacent"
 * isIsogram("moOse"), false, "same chars may not be same case"
 * isIsogram("isIsogram"), false
 * isIsogram(""), true, "an empty string is a valid isogram"
 */