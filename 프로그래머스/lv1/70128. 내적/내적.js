function solution(a, b) {
  return a.reduce((pre, _, i) => pre + a[i] * b[i], 0);
}
