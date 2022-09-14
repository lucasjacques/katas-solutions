#include <vector>
#include <string>
#include <iostream>

using vec = std::vector<int>;

int sum(std::vector<int> nums) {
  int result = 0;
  for (int i = 0; i < nums.size(); i++)
  {
    result += nums[i];
  }
  return result;
}

int main () {
  std::vector<int> example = vec{1, 2 , 3, 4};

  int result = sum(example);

  std::cout << result;
  return 0;
}