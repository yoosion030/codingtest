function solution(order) {
  let count = 0;

  order
    .toString()
    .split("")
    .map((v, i) => v % 3 === 0 && v !== "0" && count++);

  console.log(count);
  return count;
}