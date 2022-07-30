function solution(n) {
  let result = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    i === Math.sqrt(n) ? (result = (i + 1) ** 2) : (result = -1);
  }
  return result;
}
