// 런타임 에러 남
function runTimeError(n) {
  function division(n, i) {
    return n % i === 1 ? i : division(n, ++i);
  }
  return division(n, 1);
}

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}
