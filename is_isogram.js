function isIsogram(str){
  let result = str.toLowerCase(str);
  for (var i = result.length - 1; i >= 0; i--) {
  	let strSpliced = result.splice(i,1);
  	strSpliced.filter(function (argument) {
  		// body...
  	})
  }
  return result;
}

console.log(isIsogram(`Hey`));