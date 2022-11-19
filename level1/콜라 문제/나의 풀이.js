function solution(a, b, n) {
  let drink = 0;
  while (n >= a) {
    drink += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return drink;
}
