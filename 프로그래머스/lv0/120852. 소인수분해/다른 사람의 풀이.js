function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}

function solution(n) {
  var num = n;
  var A = [];
  for (let i = 2; i < n + 1; i++) {
    if (num % i == 0) {
      num = num / i;
      A.push(i);
      i--;
    }
  }
  var answer = Array.from(new Set(A));

  return answer;
}
