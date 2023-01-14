function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map((val) => +val)
    .sort((a, b) => a - b);
}
