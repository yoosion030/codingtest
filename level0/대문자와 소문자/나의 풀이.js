function solution(my_string) {
  return my_string
    .split("")
    .map((str) => (str.match(/^[A-Z]/) ? str.toLowerCase() : str.toUpperCase()))
    .join("");
}
