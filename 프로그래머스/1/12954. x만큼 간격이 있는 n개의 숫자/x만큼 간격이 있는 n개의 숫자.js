function solution(x, n) {
  let answer = [];
  while (answer.length !== n) {
    answer.push(x * (answer.length + 1));
  }
  return answer;
}