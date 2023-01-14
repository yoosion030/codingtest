function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}

function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx)
    .filter((v) => n % v === 0).length;
}

function solution(n) {
  const answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}
