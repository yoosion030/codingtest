function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}

function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (el) => n % el === 0
  );
}
