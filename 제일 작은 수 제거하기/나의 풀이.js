function solution(arr) {
    let min = arr[0];
    let answer = [];
    // 빈 배열일 때
    if(arr.length === 1) return [-1]

    // 최솟값 찾기
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) min = arr[i];
    }
    for(let j = 0; j < arr.length; j++) {
        // 최솟값 제외 배열 추가
        if(arr[j] !== min) answer.push(arr[j])
    }

    return answer
}
