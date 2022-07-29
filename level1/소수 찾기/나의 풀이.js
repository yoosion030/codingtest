function solution(x) {
  let result = 0;
  for (let i = 2; i <= x; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) i % j === 0 && (count += 1);
    count === 1 && (result += 1);
  }
  return result;
}
