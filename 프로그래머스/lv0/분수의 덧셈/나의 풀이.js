function gcd(a, b) {
  if (a % b === 0) return b; // 2번
  return gcd(b, a % b); // 3번
}

function solution(denum1, num1, denum2, num2) {
  const remainder = gcd(denum1 * num2 + denum2 * num1, num1 * num2);

  if (remainder === 1) return [denum1 * num2 + denum2 * num1, num1 * num2];
  else
    return [
      (denum1 * num2 + denum2 * num1) / remainder,
      (num1 * num2) / remainder,
    ];
}
