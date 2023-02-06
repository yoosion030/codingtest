function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, " ")
    .split(" ")
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}

function solution(n) {
  let answer = "";
  for (let i = 0; i < n.length; i++) {
    if (Number.isInteger(+n[i])) {
      answer += n[i];
    } else {
      answer += " ";
    }
  }
  return answer.split(" ").reduce((acc, cur) => (acc += +cur), 0);
}
