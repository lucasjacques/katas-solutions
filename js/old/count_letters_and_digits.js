function countLettersAndDigits(input) {
	return input.split('').reduce(function (accum, element) {
		if (isLetterOrDigit(element)) {
			return accum + 1;
		}
		return accum;
	}, 0);
}

function isLetterOrDigit(char) {
	const charCode = char.charCodeAt(0);
	return ((charCode >= 48 && charCode <= 57) ||
			(charCode >= 65 && charCode <= 90) ||
			(charCode >= 97 && charCode <= 122) ) ?
			true : false;
}

console.log(countLettersAndDigits('n!!_ice!!123'));
/* INFO's for charCodeAt solution:
 * a = 97 , z = 122
 * A = 65, Z = 90
 * 0 = 48, 9 = 57
 */

/* TESTS
 * countLettersAndDigits("hel2!lo"), 6
 * countLettersAndDigits("n!!_ice!!123"), 7
 * countLettersAndDigits("1"), 1
 * countLettersAndDigits("?"), 0
 * countLettersAndDigits("12345f%%%t5t&/6"), 10
 * countLettersAndDigits("aBcDeFg090"), 10
 * countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10
 */