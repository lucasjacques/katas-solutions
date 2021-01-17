const assert = require('assert');

function isPrimeFirstAttemptSlow(num) {
  if (num <= 1) {
    return false
  }
  for (let index = num - 1; index >= ( min / 2 ); index--) {
    if (num%index === 0 && index != 1) {
      return false     
    }
  }
  return true
}

function isPrimeWithRecursionSlow(num) {
  if (num <= 1) {
    return false
  }
  return isPrimeRecursion(num, num-1)
}

function isPrimeRecursion(quocient, divisor) {
  if (quocient % divisor === 0 && divisor > 1) {
    return false
  }
  else if (divisor > 1) {
    return isPrimeRecursion(quocient, divisor-1)
  }
  return true
}

function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (let index = 2 , maxValueNeeded = Math.sqrt(num); index <= maxValueNeeded; index++) {
    if (num%index === 0 && index != 1) {
      return false     
    }
  }
  return true
}

assert.strictEqual(isPrime(0),  false, "0 is not prime", 'Test failed');
assert.strictEqual(isPrime(1),  false, "1 is not prime", 'Test failed');
assert.strictEqual(isPrime(2),  true, "2 is prime", 'Test failed');
assert.strictEqual(isPrime(73), true, "73 is prime", 'Test failed');
assert.strictEqual(isPrime(75), false, "75 is not prime", 'Test failed');
assert.strictEqual(isPrime(-1), false, "-1 is not prime", 'Test failed');

assert.strictEqual(isPrime(3),  true, "3 is prime", 'Test failed');
assert.strictEqual(isPrime(5),  true, "5 is prime", 'Test failed');
assert.strictEqual(isPrime(7),  true, "7 is prime", 'Test failed');
assert.strictEqual(isPrime(41), true, "41 is prime", 'Test failed');
assert.strictEqual(isPrime(5099), true, "5099 is prime", 'Test failed');

assert.strictEqual(isPrime(4),  false, "4 is not prime", 'Test failed');
assert.strictEqual(isPrime(6),  false, "6 is not prime", 'Test failed');
assert.strictEqual(isPrime(8),  false, "8 is not prime", 'Test failed');
assert.strictEqual(isPrime(9), false, "9 is not prime", 'Test failed');
assert.strictEqual(isPrime(45), false, "45 is not prime", 'Test failed');
assert.strictEqual(isPrime(-5), false, "-5 is not prime", 'Test failed');
assert.strictEqual(isPrime(-8), false, "-8 is not prime", 'Test failed');
assert.strictEqual(isPrime(-41), false, "-41 is not prime", 'Test failed');

console.log('All tests passed!')