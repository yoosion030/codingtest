function solution(n) {
    let temp  = n.toString()
    let answer = []
    for(let i = 0; i < temp.length; i ++) {
        answer[i] = parseInt(temp[temp.length  - 1 - i])
    }
    return answer;
}

solution(12345)