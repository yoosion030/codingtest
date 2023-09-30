function solution(numbers) {
    const answer = numbers
        .map((num) => num.toString()) // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b)) // 문자열을 비교하여 정렬
        .join(''); // 정렬된 문자열을 이어붙여 문자열로 반환

    // 결과가 "0"으로 시작하면 "0"으로 반환
    return answer[0] === '0' ? '0' : answer;
}

console.log(solution([0, 0])); // "0"
