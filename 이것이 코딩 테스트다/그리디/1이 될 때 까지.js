function solution(N, K) {
  let count = 0;
  while (N !== 1) {
    if (N % K === 0) {
      // N을 K로 나누기
      N = parseInt(N / K);
    } else {
      // N이 K의 배수가 될 때까지 1씩 빼기
      N = N - 1;
    }
    count += 1;
  }
  console.log(count);
  return count;
}

// solution(9, 3);
// solution(25, 5);
// solution(17, 4);
solution(27, 3);
