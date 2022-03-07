function solution(n) {
    let answer = (n + '').split('')
    answer.sort((a, b) => {
        return b - a
    });
    answer = Number(answer.join(''))
    return answer
}