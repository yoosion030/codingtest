const solution = (my_string, letter) =>
  my_string
    .split("")
    .filter((value) => value !== letter)
    .join("");
