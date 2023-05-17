function solution(num_list) {
  let 곱 = num_list.reduce((prev, acc) => prev * acc);
  let 합 = num_list.reduce((prev, acc) => prev + acc) ** 2;

  return 곱 < 합 ? 1 : 0;
}