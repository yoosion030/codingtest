function solution(numbers) {
  let numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numArr.map((value, i) => (numbers = numbers.replaceAll(value, i)));
  return Number(numbers);
}