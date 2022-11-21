function solution(s1, s2) {
  let answer = 0;

  s2.map((value, index) => s1.includes(s2[index]) && ++answer);

  return answer;
}
