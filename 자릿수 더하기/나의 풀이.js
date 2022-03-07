function solution(n)
{
    let num = n.toString();
    num = num.length;
    let answer = 0;
    for(let i = 0; i < num; i++) {
        answer += Math.floor(n % 10);
        n /= 10;
    }
    return answer
}
