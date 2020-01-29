function century(year) {
	let lastTwoDigits = year % 100;

	if (lastTwoDigits === 0) {
		return year / 100;
	}
	return (year / 100) - ((year % 100) / 100) + 1;
}

console.log(century(1601));

// TESTS
// century(1705), 18, 'Testing for year 1705');
// century(1900), 19, 'Testing for year 1900');
// century(1601), 17, 'Testing for year 1601');
// century(2000), 20, 'Testing for year 2000');
// century(89), 1, 'Testing for year 89');