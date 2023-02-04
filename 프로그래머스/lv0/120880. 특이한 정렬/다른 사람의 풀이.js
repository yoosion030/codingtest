function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

function solution(numlist, n) {
  return numlist
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
}
