function solution(left, right) {
    let answer = 0;

    // left ~ right까지 반복
     for(let i = left; i<=right; i++) {
         let cnt = 0;  
        //1 ~ i까지 반복하여 약수 개수 판별
        for(let j = 1; j <= i; j++) if(i % j === 0) cnt += 1;
        // 약수 개수를 판별하여 더하거나 뺌
        if(cnt % 2 == 0) answer += i;
        else answer -= i;
        cnt = 0;
    }
    return answer;
}

solution(13, 17);
solution(24, 27); 