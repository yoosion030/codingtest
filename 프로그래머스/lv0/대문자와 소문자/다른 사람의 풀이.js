function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

function solution(my_string) {
  return my_string
    .split("")
    .map((v, index) =>
      my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase()
    )
    .join("");
}