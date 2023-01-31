function solution(n) {
  let answer = [];
  let num = n;
  for (let i = 2; i <= n; i++) {
    while (num % i === 0) {
      num /= i;
      answer.push(i);
    }
  }
  return [...new Set(answer)];
}