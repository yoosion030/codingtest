function getFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function solution(balls, share) {
  return (
    getFactorial(balls) / (getFactorial(balls - share) * getFactorial(share))
  );
}
