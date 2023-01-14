const solution = (my_string, n) =>
  my_string
    .split("")
    .map((value) => value.repeat(n))
    .join("");
