function check(a, x) {
  return a.filter((elem) => elem === x).length !== 0;
}
console.log(check(['what', 'a', 'great', 'kata'], 'kata'));