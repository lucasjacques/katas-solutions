const 	IS_EVEN = true,
		IS_ODD = false,
		ERROR = null;

function divide(weight){
	// any integer below 1 is considered an error in this case
	if (weight <= 0) {
		return ERROR;
	}
	if (weight <= 2) {
		return IS_ODD;
	}
	return (weight % 2 === 0) ? IS_EVEN : IS_ODD;
}

const divideCleaner = weight => {
	return (weight > 2) && isEven(weight);
}

const isEven = number => number % 2 === 0;


console.log(divideCleaner(100));

/* TESTS
 * Test.assertEquals(divide(4), true);
 * Test.assertEquals(divide(2), false);
 * Test.assertEquals(divide(5), false);
 * Test.assertEquals(divide(88), true);
 * Test.assertEquals(divide(100), true);
 * Test.assertEquals(divide(67), false);
 * Test.assertEquals(divide(90), true);
 * Test.assertEquals(divide(10), true);
 * Test.assertEquals(divide(99), false);
 * Test.assertEquals(divide(32), true);
*/