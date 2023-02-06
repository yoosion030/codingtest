function solution(my_string) {
  let answer = 0;

  my_string.split(/[a-zA-Z]/g).map((v, i) => (answer += Number(v)));

  return answer;
}
