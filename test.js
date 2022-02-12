// 별찍기
for(let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        document.write('*');
    }
    document.write('<br>');
}

// 배열 요소 찾기
const arr = [1,2,3,4,5];
document.write('마지막에서 세번째 요소 : ' + arr[arr.length - 3]);
document.write('<br>');

// 배열 출력
document.write(arr);
document.write('<br>');

// 배열 뒤에서 추가
arr.push(100);
document.write(arr);
document.write('<br>');

// 배열 뒤에서 삭제
arr.pop();
document.write(arr);
document.write('<br>');

// 배열 앞에서 삭제
arr.shift();
document.write(arr);
document.write('<br>');

// 배열 앞에서 추가
arr.unshift(8);
document.write(arr);
document.write('<br>');

// 배열 중간 요소 삭제 (인덱스 , 삭제할 개수)
arr.splice(1,2);
document.write(arr);
document.write('<br>');

// 배열 중간 요소 추가 (인덱스 , 0, 추가 요소 or 추가 요소들)
arr.splice(2, 0, 9,12,15);
document.write(arr);
document.write('<br>');

// 배열 요소 찾기
document.write(arr.includes(12));
document.write('<br>');

const arr2 = ['가', '라', '다', '라', '마', '라'];


while(arr2.indexOf('라') > -1){
    arr2.splice(arr2.indexOf('라'), 1);
}
document.write(arr2);
document.write('<br>');

const obj = {
    bc : 'hello',
    '2bc' : 'error'
};

document.write(obj["2bc"] + '<br>');

delete obj["2bc"];

document.write(obj["2bc"] + '<br>');