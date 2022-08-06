function solution(s) {
  let answer = [];
  s.split(" ").map((value, index) => {
    let empty = value
      .split("")
      .map((val, index) => {
        return index % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
      })
      .join("");
    answer[index] = empty;
  });
  return answer.join(" ");
}
