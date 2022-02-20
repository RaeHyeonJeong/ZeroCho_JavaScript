function solution(n, lost, reserve) {
	let result = 0;

	// lost 와 reserve에서 중복된 요소 제거
	reserve = reserve
		.map((val) => {
			let index = lost.indexOf(val);
			if (index > -1) {
				lost.splice(index, 1);
				return;
			} else {
				return val;
			}
		})
		.filter((val) => val)
		.sort((a, b) => a - b);
	lost.sort((a, b) => a - b);

	// 잃어버린 사람 제외 , 참여가능 인원
	result = n - lost.length;

	//console.log(result);
	console.log(lost);
	console.log(reserve);

	// 빌려줄 수 있는지 계산
	if (reserve.length !== 0 || result !== n) {
		lost.map((val) => {
			reserve.find((element, idx) => {
				if (val + 1 === element || val - 1 === element) {
					result++;
					reserve.splice(idx, 1);
					return;
				}
			});
		});
	}

	return result;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [1, 2, 3, 4, 5], [1]));
console.log(solution(5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(solution(5, [1], [1]));
console.log(solution(5, [1, 2], [1]));
