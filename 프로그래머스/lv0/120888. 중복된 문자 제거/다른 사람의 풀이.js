function solution(my_string) {
  return [...new Set(my_string)].join("");
}

var solution = (s) => [...s].filter((c, i) => s.indexOf(c) == i).join("");
