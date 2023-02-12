function solution(arr, M, K) {
  // M이 8이고 K가 3이면 (8 / 3 = 2)이므로 가장 큰 수를 3번씩 2번 더할 수 있음.
  // 따라서 첫번째 값은  (M / K * K * 가장 큰 수) 가 됨
  // (8 % 3 = 2) 이므로 두번째로 큰 수를 2번 더하면 됨.
  // 따라서 두번째 값은 (M % K * 두번째로 큰 수)

  arr.sort((a, b) => a - b);
  return parseInt(M / K) * K * arr.at(-1) + (M % K) * arr.at(-2);
}

solution([2, 4, 5, 4, 6], 8, 3);
solution([3, 4, 3, 4, 3], 7, 2);
