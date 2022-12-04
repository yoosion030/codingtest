function solution(my_string) {
  return my_string
    .split("")
    .filter((val) => Number(val) === +val)
    .reduce((prev, curr) => +prev + +curr);
}
