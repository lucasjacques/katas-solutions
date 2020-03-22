const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  const currentBlue = blueStart - bluePulled;
  const currentRed = redStart - redPulled

  return currentBlue / (currentBlue + currentRed);
}
console.log(guessBlue(12, 18, 4, 6));
/* 
 * Test.assertEquals(guessBlue(5, 5, 2, 3), 0.6);
 * Test.assertEquals(guessBlue(5, 7, 4, 3), 0.2);
 * Test.assertEquals(guessBlue(12, 18, 4, 6), 0.4);
 */