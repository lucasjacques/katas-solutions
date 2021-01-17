//DOING

function thirt(n) {
    const remaindersOf13 = [1,10,9,12,3,4];
    let stationed = 0;
    while (stationed < 2) {
    	const array = n.toString();
    	let j = 0;
    	for (var i = array.length - 1; i >= 0; i--) {
    		console.log('debug', array[i]);
    		
    		j++;
    	}
    	stationed = 2;
    }
    return 79;
}

console.log(thirt(8529));

/*
Test.describe("thirt",function() {
Test.it("Basic tests",function() {    
    Test.assertEquals(thirt(8529), 79)
    Test.assertEquals(thirt(85299258), 31)
    Test.assertEquals(thirt(5634), 57)
    Test.assertEquals(thirt(1111111111), 71)
    Test.assertEquals(thirt(987654321), 30)
})})
*/