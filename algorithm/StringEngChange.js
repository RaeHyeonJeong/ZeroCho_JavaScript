function solution(s) {
	let map = new Map([
		['zero', '0'],
		['one', '1'],
		['two', '2'],
		['three', '3'],
		['four', '4'],
		['five', '5'],
		['six', '6'],
		['seven', '7'],
		['eight', '8'],
		['nine', '9']
	]);

	for (let value of map.keys()) {
		if (s.includes(value)) {
			s = s.replace(new RegExp(`${value}`, 'g'), map.get(value));
		}
	}

	return Number(s);
}

console.log(solution('seven1onetwoone'));
