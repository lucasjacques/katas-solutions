function getPINs(observed) {
	let result = [...findKeypadVariations(observed[0])];
	for (var i = 1; i < observed.length; i++) {
		if (i < observed.length) {
			let variations = findKeypadVariations(observed[i]);
			result = mixVariations(result, variations);
		}
		else {
			continue;
		}
	}
	return result;
	// 1 2 3
	// 4 5 6
	// 7 8 9
	//   0  
}

const keypadVariations = {	
	'1':['1','2','4'],
	'2':['1','2','3','5'],
	'3':['2','3','6'],
	'4':['1','4','5','7'],
	'5':['2','4','5','6','8'],
	'6':['3','5','6','9'],
	'7':['4','7','8'],
	'8':['5','7','8','9', '0'],
	'9':['6','8','9'],
	'0':['8', '0'],
};

function findKeypadVariations(key) {
	return keypadVariations[key];
}

function mixVariations(variations1, variations2) {
	let mixed = [];
	for (var1 of variations1) {
		for (var2 of variations2) {
			mixed.push(var1 + var2);
		}
	}
	return mixed;
}

// the code below was taken from the Solutions section after resolving the problem (not mine) ;)
function getPINs2(observed) {
  var adjacent = [
    /* 0 */ [0, 8],
    /* 1 */ [1, 2, 4],
    /* 2 */ [1, 2, 3, 5],
    /* 3 */ [2, 3, 6],
    /* 4 */ [1, 4, 5, 7],
    /* 5 */ [2, 4, 5, 6, 8],
    /* 6 */ [3, 5, 6, 9],
    /* 7 */ [4, 7, 8],
    /* 8 */ [5, 7, 8, 9, 0],
    /* 9 */ [6, 8, 9]
  ];
  
  return observed
    .split('')
    .map(function(d) { return adjacent[d|0]; })
    .reduce(function(pa, da) {
      return da.reduce(function(pv, d) {
        return pv.concat(pa.map(function(p) {
          return '' + p + d;
        }));
      }, []);
    }, ['']);
}
console.log(getPINs2('120'));