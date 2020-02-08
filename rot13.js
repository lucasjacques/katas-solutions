function rot13(message){
  let ciphertext = '';
  for (var i = 0; i < message.length; i++) {
  	const cipherchar = findRot13Letter(message[i]);
  	ciphertext += cipherchar;
  }
  return ciphertext;
}

function findRot13Letter(char) {
	const charCode = char.charCodeAt(0);
	let charCodecipher;
	if (charCode > 109){
		charCodecipher = 96 + ((charCode+13) % 122);
	}
	else if (charCode > 96){
		charCodecipher = charCode + 13;
	}
	else if (charCode > 77){
		charCodecipher = 64 + ((charCode+13) % 90);
	}
	else if (charCode > 64){
		charCodecipher = charCode + 13;
	} else {
    	return char;
  	}

	return String.fromCharCode(charCodecipher);
}

console.log(rot13('Test'));

/* NOTES
 * 97 e 122 = 25 letters
 * 65 e 90 = 25 letters
 */

/* TESTS
 * 	Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
 * 	Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")    
 */