function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    numbers.includes(i) ? null : (answer += i);
  }
  return answer;
}
