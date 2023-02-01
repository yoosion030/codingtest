function solution(my_string) {
  let answer = 0;

  const operators = my_string.split(" ").filter((v) => v === "+" || v === "-");
  const numbers = my_string.split(" ").filter((v) => !(v === "+" || v === "-"));

  numbers.map((v, i) => {
    if (i === 0) answer += Number(v);
    else if (operators[i - 1] === "+") answer += Number(v);
    else if (operators[i - 1] === "-") answer -= Number(v);
  });

  return answer;
}
