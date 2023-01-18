function solution(num, total) {
  let answer = new Array(num);
  let center = Math.ceil(total / num);
  let centerIdx = Math.floor(num / 2);

  return answer.fill().map((arr, i) => center + i - centerIdx);
}