function solution(n, t) {
  n = n * 2;
  t = t - 1;
  return t === 0 ? n : solution(n, t);
}
