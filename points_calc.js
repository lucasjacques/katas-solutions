/*
	Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

	For example: ["3:1", "2:2", "0:1", ...]

	Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

	if x>y - 3 points
	if x<y - 0 point
	if x=y - 1 point
	Notes:

	there are 10 matches in the championship
	0 <= x <= 4
	0 <= y <= 4
*/

const myGames = ['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'];

const points = (games) => (
	games.reduce((acc, elem) => {
		const x = Number(elem[0]);
		const y = Number(elem[2]);

		if ( x > y ) {
			return acc + 3;
		}

		if ( x < y ) {
			return acc;
		}

		if ( x === y ) {
			return acc + 1;
		}

	},0)
);

console.log(points(myGames));