// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

#include <vector>
#include <string>
#include <iostream>

int opposite(int number) {
  return number * -1;
}

int main () {
  int example = 10;

  int result = opposite(example);

  std::cout << result;
  return 0;
}