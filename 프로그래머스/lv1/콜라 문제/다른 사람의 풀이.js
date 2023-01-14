solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

function solution(a, b, n) {
  var answer = getCola(a, b, n, 0);
  return answer;
}

function getCola(a, b, c, result) {
  const newCola = parseInt(c / a) * b;
  result += newCola;
  if (newCola > 1) return getCola(a, b, newCola + (c % a), result);
  else return parseInt(result);
}
