function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  while (B.length) {
    answer += A[0] * B[B.length - 1];

    B.pop();
    A.shift();
  }

  return answer;
}