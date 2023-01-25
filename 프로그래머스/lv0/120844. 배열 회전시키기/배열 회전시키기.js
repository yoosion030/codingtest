function solution(numbers, direction) {
  let answer = [];

  if (direction === "left") {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);

      if (i === numbers.length - 1) {
        answer.push(numbers[0]);
      }
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      if (i === 1) {
        answer.push(numbers[numbers.length - 1]);
      }
      answer.push(numbers[i - 1]);
    }
  }

  return answer;
}
