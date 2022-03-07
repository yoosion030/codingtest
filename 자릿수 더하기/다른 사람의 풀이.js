function solution(n)
{
    let a = (n + '').split(''); // 숫자를 배열로 반환
    let b = 0;
    // 배열의 길이만큼 반복
    for (let i = 0; i < a.length; ++i) {
        b += parseInt(a[i]); // 배열 인덱스마다 더하기
    }
    return b;
}
