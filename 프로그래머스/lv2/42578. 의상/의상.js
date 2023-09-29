function solution(clothes) {
  const closet = {};

  for (const cloth of clothes) {
    if (!closet[cloth[1]]) {
      closet[cloth[1]] = 1;
    } else closet[cloth[1]]++;
  }

  let answer = 1;

  for (const cloth in closet) {
    answer *= closet[cloth] + 1;
  }

  return answer - 1;
}
