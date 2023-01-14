function solution(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}

function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, b) => parseInt(a) + parseInt(b));
}

function solution(my_string) {
  let my_str = [...my_string];
  let count = 0;
  for (i = 0; i < my_str.length; i++) {
    if (isNaN(Number(my_str[i])) == false) {
      count = count + Number(my_str[i]);
    }
  }
  return count;
}
