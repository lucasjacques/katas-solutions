function longest(s1, s2) {
	let result = (s1+s2).split('').sort();
  	return result.filter(
	  	function (item, index) {
	  		return result.indexOf(item) === index;
	  	}
  	).join('');
}

console.log(longest("aretheyhere", "yestheyarehere"));
// TEST
// longest("aretheyhere", "yestheyarehere"), "aehrsty"
// longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu"
// longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy"