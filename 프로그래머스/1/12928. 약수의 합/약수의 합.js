function solution(n) {
  let sum = [n];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum.push(i);
      if (!sum.includes(i)) {
        sum.push(n / i);
      }
    }
  }

  return sum.reduce((a, b) => a + b);
}