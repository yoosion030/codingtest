function solution(s) {
  return s
    .split(" ")
    .map((str) => {
      let firstChar = str.substring(0, 1).toUpperCase();
      let restChars = str.substring(1).toLowerCase();
      return firstChar + restChars;
    })
    .join(" ");
}