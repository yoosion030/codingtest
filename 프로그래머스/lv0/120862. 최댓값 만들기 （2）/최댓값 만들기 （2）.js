function solution(numbers) {
  numbers.sort((a, b) => a - b);
  let front = numbers.at(0) * numbers.at(1);
  let back = numbers.at(-1) * numbers.at(-2);
  return front > back ? front : back;
}