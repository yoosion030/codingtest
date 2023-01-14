function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}

function solution(my_string) {
  var answer = my_string.split("");
  for (let i = 0; i < answer.length; i++) {
    switch (answer[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        answer.splice(i, 1);
        i--;
        break;
    }
  }

  return answer.join("");
}
