function solution(n, times) {
  let max = Math.max(...times);
  let left = 1;
  let right = max * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let test = 0;
    times.map((v) => {
      test += Math.floor(mid / v);
    });

    if (test >= n) {
      right = mid - 1;
    } else left = mid + 1;
  }

  return left;
}