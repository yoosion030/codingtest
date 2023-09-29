function solution(s) {
  let answer = [];

  const arr = s.split("");

  for (const bracket of arr) {
    if (arr[0] === ")") return false;
    if (bracket === "(") answer.push(bracket);
    else answer.pop();
  }

  return Boolean(!answer.length);
}
