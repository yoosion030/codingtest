function solution(num, total) {
  let center = Math.ceil(total / num);
  let centerIdx = Math.floor(num / 2);

  return new Array(num).fill().map((arr, i) => center + i - centerIdx);
}
