function solution(array, n) {
  let answer = 0;
  array.map((value) => value === n && answer++);

  return answer;
}
