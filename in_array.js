function inArray(array1,array2){
  let result = [];
  for (var i = 0; i < array1.length; i++) {
  	let filtered = array2.filter(function(item) {
  		if(item.includes(array1[i])) {
	  		return true;
  		}
  	});
  	if(filtered.length > 0) {
  		result.push(array1[i]);
  	}
  }
  result.sort();
  return result;
}

let a1 = ['live', 'strong', 'arp'],
	a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
console.log(inArray(a1, a2));

/* TESTS
 * a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
 * a1 = ['xyz', 'live', 'strong']
 * Test.assertSimilar(inArray(a1, a2), ['live', 'strong'])
 * a1 = ['live', 'strong', 'arp']
 * Test.assertSimilar(inArray(a1, a2), ['arp', 'live', 'strong'])
 * a1 = ['tarp', 'mice', 'bull']
 * Test.assertSimilar(inArray(a1, a2), [])
 */