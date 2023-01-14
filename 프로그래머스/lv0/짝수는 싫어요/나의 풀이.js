const solution = (n) =>
  Array.from(new Array(n), (x, i) => i + 1).filter((val) => val % 2 !== 0);
