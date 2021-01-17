/* DOING a 6 kyu
 * tm = time the epidemy will be observed
 * n = times the epidemy propagates
 * s0 = number of starting susceptible people
 * i0 = number of starting infected people
 * b = constant of people contact (that spreads the disease)
 * a = constant of people that will recover
 */

function epidemic(tm, n, s0, i0, b, a) {
	let propagationDays = n;

	while (propagationDays > 0) {
		
	}

    return 483;
}

function

console.log(epidemic(14, 336, 996, 2, 0.00206, 0.41));

/*	TESTS
	
var testing = function(actual, expected, msg) {
    var r = Math.abs(actual - expected);
    var inrange = r <= 1;
    Test.expect(inrange, msg || "(actual - expected).abs must be <= 1 but was  " + r);
}

Test.describe("epidemic",function() {
Test.it("Basic tests",function() {       
    var tm = 18, n = 432, s0 = 1004, i0 = 1, b = 0.00209, a = 0.51
    testing(epidemic(tm, n, s0, i0, b, a), 420)
    tm = 12 ;n = 288 ;s0 = 1007 ;i0 = 2 ;b = 0.00206 ;a = 0.45
    testing(epidemic(tm, n, s0, i0, b, a), 461)
    tm = 13 ;n = 312 ;s0 = 999 ;i0 = 1 ;b = 0.00221 ;a = 0.55
    testing(epidemic(tm, n, s0, i0, b, a), 409)
    tm = 24 ;n = 576 ;s0 = 1005 ;i0 = 1 ;b = 0.00216 ;a = 0.45
    testing(epidemic(tm, n, s0, i0, b, a), 474)
    tm = 24 ;n = 576 ;s0 = 982 ;i0 = 1 ;b = 0.00214 ;a = 0.44
    testing(epidemic(tm, n, s0, i0, b, a), 460)
    tm = 20 ;n = 480 ;s0 = 1000 ;i0 = 1 ;b = 0.00199 ;a = 0.53
    testing(epidemic(tm, n, s0, i0, b, a), 386)
    tm = 28 ;n = 672 ;s0 = 980 ;i0 = 1 ;b = 0.00198 ;a = 0.44
    testing(epidemic(tm, n, s0, i0, b, a), 433)
    tm = 14 ;n = 336 ;s0 = 996 ;i0 = 2 ;b = 0.00206 ;a = 0.41
    testing(epidemic(tm, n, s0, i0, b, a), 483)
    tm = 13 ;n = 312 ;s0 = 993 ;i0 = 2 ;b = 0.0021 ;a = 0.51
    testing(epidemic(tm, n, s0, i0, b, a), 414)
    tm = 28 ;n = 672 ;s0 = 999 ;i0 = 1 ;b = 0.00197 ;a = 0.55
    testing(epidemic(tm, n, s0, i0, b, a), 368)
})})

*/