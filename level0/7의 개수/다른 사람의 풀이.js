function solution(array) {
  return array.join("").split("7").length - 1;
}

function solution(array) {
  let result = 0;

  array.map((item) => {
    while (item > 0) {
      if (item % 10 === 7) {
        result += 1;
      }

      item = Math.floor(item / 10);
    }
  });

  return result;
}

function solution(array) {
  return array
    .join("")
    .split("")
    .reduce((acc, v) => {
      if (v === "7") acc++;
      return acc;
    }, 0);
}
