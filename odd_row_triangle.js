function oddRow(n) {
	let result = [],
		currentN = n;
		triangularN = triangularNumber(n);
	while(currentN > 0) {
		currentN --;
		result.push(triangularN * 2 - (1 + (2 * currentN))) 
	}
	return result;
}

function triangularNumber(n) {
	let result = 0,
		currentN = n;
	while(currentN > 0) {
		result += currentN;
		currentN--;
	}
	return result;
}

console.log(oddRow(11418));

/* NOTES
 * 1				(1 * 1)
 * 3 5				(3 * 2) - 1		(3 * 2) - 3
 * 7 9 11			(6 * 2) - 1		(6 * 2) - 3		(6 * 2) + 4
 * 13 15 17 19		(10 * 1) + 3
 * 21 23 25 27 29	(15 * 1) + 3
*/

/* TESTS
 *	(oddRow(1), [1]);
 *	(oddRow(2), [3, 5]);
 *	(oddRow(13), [157, 159, 161, 163, 165, 167, 169, 171,
 *					173, 175, 177, 179, 181]);
 *	(oddRow(19), [343, 345, 347, 349, 351, 353, 355, 357,
 *					359, 361, 363, 365, 367, 369, 371, 373, 375, 377, 379]);
 *	(oddRow(41), 	[1641, 1643, 1645, 1647, 1649, 1651, 1653,
 *				  	1655, 1657, 1659, 1661, 1663, 1665, 1667, 1669, 1671, 1673, 1675, 1677,
 *					1679, 1681, 1683, 1685, 1687, 1689, 1691, 1693, 1695, 1697, 1699, 1701,
 *					1703, 1705, 1707, 1709, 1711, 1713, 1715, 1717, 1719, 1721]);
 */