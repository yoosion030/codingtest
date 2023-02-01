function solution(my_string) {
  let answer = 0;
  let numbers = [];
  let operators = [];

  my_string
    .split(" ")
    .map((v) => (Number(v) ? numbers.push(Number(v)) : operators.push(v)));

  numbers.map((v, i) => {
    if (i === 0) answer += v;
    else if (operators[i - 1] === "+") answer += v;
    else if (operators[i - 1] === "-") answer -= v;
  });

  return answer;
}

solution("3 + 4");
