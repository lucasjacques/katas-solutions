function accum(str) {
	result = '';
	for (var i = 0; i < str.length; i++) {
		mumble = str[i].toLowerCase().repeat(i);
		result += str[i].toUpperCase() + mumble + '-';
	}
	result = result.slice(0, result.length-1);
	return result;
}

console.log(accum('abcd')); // -> 'A-Bb-Ccc-Dddd'
console.log(accum('RqaEzty')); // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
console.log(accum('cwAt')); // -> 'C-Ww-Aaa-Tttt'