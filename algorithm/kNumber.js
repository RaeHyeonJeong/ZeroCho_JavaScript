/* function solution(array, commands) {
	var answer = [];
	let tempArr;

	for (let elment of commands) {
		tempArr = array
			.map((val, idx) => {
				if (idx >= elment[0] - 1 && idx <= elment[1] - 1) {
					return val;
				}
			})
			.sort((a, b) => a - b)
			.filter((val) => val);

		console.log(tempArr);
		answer.push(tempArr[elment[2] - 1]);
	}

	console.log(answer);
	return answer;
}
 */

function solution(array, commands) {
	var answer = [];

	return commands.map((val) => {
		return array.slice(val[0] - 1, val[1]).sort((a, b) => a - b)[val[2] - 1];
	});
}

console.log(
	solution(
		[1, 5, 2, 6, 3, 7, 4],
		[
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3]
		]
	)
);
