function solution(age) {
  let char = "abcdefghij";
  return Array.from(age.toString())
    .map((t) => char[+t])
    .join("");
}

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
