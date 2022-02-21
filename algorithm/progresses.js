function solution(progresses, speeds) {
	let answer = [];

	// 배열의 시작이 100이 될때까지 작업
	while (progresses.length !== 0) {
		progresses = progresses.map((val, idx) => {
			if (val <= 100) {
				return (val += speeds[idx]);
			} else {
				return val;
			}
		});

		let result = 0; // 배포 숫자 저장 변수

		// 앞에서 부터 100인 부분까지 탐색
		let tempArr = progresses.filter((val) => val);

		if (tempArr[0] >= 100) {
			for (let i = 0; i < tempArr.length; i++) {
				if (tempArr[i] >= 100) {
					result++;
					progresses.shift();
					speeds.shift();
				} else {
					break;
				}
			}
			answer.push(result);
		}
	}

	return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
