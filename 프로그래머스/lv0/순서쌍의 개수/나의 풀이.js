function solution(n) {
  let count = 0;
  Array.from(new Array(n), (x, i) => i + 1).map((value) => {
    n % value === 0 && count++;
  });
  return count;
}
