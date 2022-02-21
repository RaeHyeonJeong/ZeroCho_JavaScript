function solution(arr) {
	let tempArr = [];
	let min = 0;

	min = Math.min(...arr);
	tempArr = arr.filter((value) => value > min);

	return tempArr.length ? tempArr : [-1];
}

console.log(solution([450, 300, 8, 1000, 12, 8]));
