function solution(n) {
    // 문자풀이
    return parseInt((n+"").split("").sort().reverse().join(""));
}
