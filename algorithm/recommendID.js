/* function solution(new_id) {
	let answer = '';

	// 1단계 + 2단계
	answer = new_id.toLocaleLowerCase().replace(/[^0-9a-z-_.]/g, '');

	// 3단계
	answer = answer
		.split('')
		.map((val, idx) => {
			return val === answer[idx + 1] && val === '.' ? '' : val;
		})
		.join('');

	// 4단계
	answer = answer.startsWith('.') ? answer.slice(1) : answer;
	answer = answer.endsWith('.') ? answer.slice(0, -1) : answer;

	// 5단계
	answer = !answer.length ? 'a' : answer;
	// 6단계
	answer = answer.length >= 16 ? answer.slice(0, 15) : answer;
	answer = answer.endsWith('.') ? answer.slice(0, -1) : answer;
	// 7단계
	answer = answer.length <= 2 ? answer.concat(answer.slice(-1).repeat(3 - answer.length)) : answer;

	return answer;
} */

function solution(new_id) {
	const answer = new_id
		.toLowerCase() // 1
		.replace(/[^\w-_.]/g, '') // 2
		.replace(/\.{2,}/g, '.') // 3
		.replace(/^\.|\.$/g, '') // 4
		.replace(/^$/, 'a') // 5
		.slice(0, 15)
		.replace(/\.$/, ''); // 6
	const len = answer.length;
	return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
console.log(solution('...!@BaT#*..y.abcdefghijklm.'));
console.log(solution('abc12defghijklmn.p'));
console.log(solution('aaaaaaaaaaaaaaaa'));
