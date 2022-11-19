function solution(lottos, win_nums) {
  let min = 0;
  let max = 0;

  lottos.map((lotto) => {
    win_nums.map((num) => {
      lotto === num && min++;
      lotto === num && max++;
    });
    lotto === 0 && max++;
  });
  if (min === 0) min = 1;
  if (max === 0) max = 1;
  return [7 - max, 7 - min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
