function solution(before, after) {
  let beforeArray = before.split("").sort();
  let afterArray = after.split("").sort();

  beforeArray = beforeArray.map((b, index) => {
    if (afterArray[index] !== b) return 0;
    return 1;
  });

  return beforeArray.includes(0) ? 0 : 1;
}
