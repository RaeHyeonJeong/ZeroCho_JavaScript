function solution(s) {
	let result;

	result = s
		.split(' ')
		.map(function (word) {
			return word
				.split('')
				.map(function (val, idx) {
					return idx % 2 ? val.toLowerCase() : val.toUpperCase();
				})
				.join('');
		})
		.join(' ');

	return result;
}
/* 
function solution(s) {
	return s
		.split(' ')
		.map((w) =>
			w
				.split('')
				.map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
				.join('')
		)
		.join(' ');
}
 */
console.log(solution('try hello world'));
