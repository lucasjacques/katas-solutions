function findUniq(arr) {
	const elements = {'singles': []},
  		result = null;

  	for (var i = 0; i < arr.length; i++) {
  		elements[arr[i]] = (elements[arr[i]] || 0) + 1;
  		if (elements[arr[i]] === 1) {
  			elements.singles.push(arr[i]);
  		} 
  		else if (elements[arr[i]] > 1 && elements.singles.indexOf(arr[i]) !== -1) {
  			elements.singles.splice(elements.singles.indexOf(arr[i]), 1);
  		}
  	}
  	return elements.singles.length === 1 ? elements.singles[0] : null;
}

console.log(findUniq([ 3, 10, 3, 3, 3 ]));

/* TESTS
 * Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
 * Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
 * Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);
 */