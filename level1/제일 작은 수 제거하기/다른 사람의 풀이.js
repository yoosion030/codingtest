function solution(arr) {

    let answer = [];
    let min = Math.min(...arr);

    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] !== min) answer.push(arr[i]);
    }

    return answer.length < 1 ? [-1] : answer;
}