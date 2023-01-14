function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}

function solution(my_string) {
  return my_string
    .replace(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .sort();
}
