function solution(n, m) {
  let GCD = 0;
  let LCM = 0;

  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) GCD = i;
  }
  for (let i = n; i <= m * n; i++) {
    if (i % n === 0 && i % m === 0) {
      LCM = i;
      break;
    }
  }
  return [GCD, LCM];
}
