const solution = (n) =>
  n
    .toString()
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
