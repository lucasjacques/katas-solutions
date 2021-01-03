const testit = (a,b) => {
  const treatedA = removeDuplicates(a.sort( (a, b) => a - b ))
  const treatedB = removeDuplicates(b.sort( (a, b) => a - b ))
  result = treatedA.concat(treatedB).sort( (a, b) => a - b )
  return result
}

const removeDuplicates = (array) => {
  const result = [
    array[0]
  ]
  for (let i = 1; i < array.length; i++) {
    const current = array[i]
    const previous = array[i-1]
    if (current !== previous) {
      result.push(current)
    }
  }
  return result
}

testit([0], [1])
// testit([10, 1,1,1,2, 1], [5,5,3, 10])

/* TESTS
 * testit([0],[1]), [0,1]
 * testit([1,2],[3,4]), [1,2,3,4]
 * testit([1],[2,3,4]), [1,2,3,4]
 * testit([1,2,3],[4]), [1,2,3,4]
 * testit([1,2],[1,2]), [1,1,2,2]
 */