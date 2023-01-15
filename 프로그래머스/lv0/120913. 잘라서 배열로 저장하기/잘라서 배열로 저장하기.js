function solution(my_str, n) {
  let answer = [];
  let string = "";
  for (let i = 0; i < my_str.length; i++) {
    string += my_str[i];
    if ((i + 1) % n === 0) {
      answer.push(string);
      string = "";
    } else if (i === my_str.length - 1) {
      answer.push(string);
    }
  }
  return answer;
}
