function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}

function solution(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }
  return numbers[idx];
}
