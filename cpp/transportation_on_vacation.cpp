// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

#include <vector>
#include <string>
#include <iostream>

int rental_car_cost(int d) {
  int perDayCost = 40;
  int sevenDaysDiscount = 50;
  int threeDaysDiscount = 20;

  int result = perDayCost * d;
  if (d >= 7) {
      return result -= sevenDaysDiscount;
  }

  if (d >= 3) {
    return result - threeDaysDiscount;
  }

  return result;
}

int main () {
  int example = 10;

  int result = rental_car_cost(example);

  std::cout << result;
  return 0;
}