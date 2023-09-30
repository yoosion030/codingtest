function solution(array, commands) {
    const result = [];

    for (const command of commands) {
        const [i, j, k] = command;
        const slicedArray = array.slice(i - 1, j); // 인덱스는 0부터 시작하므로 i-1
        slicedArray.sort((a, b) => a - b); // 오름차순 정렬
        result.push(slicedArray[k - 1]); // k번째 원소를 결과 배열에 추가
    }

    return result;
}