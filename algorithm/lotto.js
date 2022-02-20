function solution(lottos, win_nums) {
	// lottos = 구매한 로또 번호 배열
	// win_nums = 당첨 번호 배열

	let result = []; // 결과 저장 배열
	let minCount; // 최저 당점 개수
	let zeroCount; // 공백 번호 개수
	let minRank; // 최저 등수
	let maxRank; // 최고 등수

	// 0 의 개수 체크
	zeroCount = lottos.filter((val) => val === 0).length;

	// 기존 배열에서 맞는 번호 체크 + 개수
	minCount = lottos
		.map(function (val) {
			return win_nums.find((number) => number === val);
		})
		.filter((val) => val).length;

	// 값 개수로 최대 등수 , 최저 등수 계산

	maxRank = calcRank(zeroCount + minCount);
	minRank = calcRank(minCount);

	// 결과 배열에 push
	result.push(maxRank);
	result.push(minRank);

	return result;
}

function calcRank(val) {
	return val === 6 ? 1 : val === 5 ? 2 : val === 4 ? 3 : val === 3 ? 4 : val === 2 ? 5 : 6;
}
