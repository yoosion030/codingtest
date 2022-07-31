function solution(arr) {
  let answer = [];
  arr.map(
    (value, index) => arr[index] !== arr[index + 1] && answer.push(arr[index])
  );

  return answer;
}
