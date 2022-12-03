function solution(array) {
  return array
    .join("")
    .split("")
    .filter((value) => value === "7").length;
}
