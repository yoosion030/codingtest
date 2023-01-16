function solution(numbers, k) {
  while (numbers.length < k * 2) {
    numbers.push(...numbers);
  }

  return numbers[k * 2 - 2];
}