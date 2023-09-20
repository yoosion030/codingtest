function solution(n) {
  let answer = [n];
  for (let i = 1; i < n / 2; i++) {
    if (n % i === 0) {
      answer.push(i, n / i);
      answer.push(n / i);
    }
  }

  return answer.sort((a, b) => a - b).filter((v, i) => answer.indexOf(v) === i);
}