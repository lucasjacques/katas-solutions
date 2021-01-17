function pigIt(str){
	const words = str.split(' ');

	for (let i = 0; i < words.length; i++) {
		if (words[i] === '!' || words[i] === '?'){
			continue;
		}

		const firstChar = words[i].split(''),
			rest = firstChar.splice(1, words[i].length-1).join('');
		
		words[i] = rest + firstChar + 'ay';
	}

	return words.join(' ');
}

console.log(pigIt('This is my string'));

/* TESTS
 * pigIt('Pig latin is cool'),'igPay atinlay siay oolcay'
 * pigIt('This is my string'),'hisTay siay ymay tringsay'
 */