function deleteNth(arr,n){
	const elements = {},
		  result = [];

	for (let i = 0; i < arr.length; i++) {
		if (elements[arr[i]] !== undefined && elements[arr[i]] >= n) {
			continue;
		}
		elements[arr[i]] = (elements[arr[i]] || 0) + 1;
		result.push(arr[i]);
	}
	return result;
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
/* TESTS 
 * func(input1, input2), outputExpected
 * deleteNth([20,37,20,21], 1), [20,37,21])
 * deleteNth([1,1,3,3,7,2,2,2,2], 3), [1,1,3,3,7,2,2,2])
 */