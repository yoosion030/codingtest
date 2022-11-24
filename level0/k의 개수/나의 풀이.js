function solution(i, j, k) {
  const regex = new RegExp(k, "g");
  let array = Array.from({ length: j - i + 1 }, (v, idx) => i + idx);
  return array.join("").match(regex)?.length ?? 0;
}

solution(1, 13, 1);
solution(10, 50, 5);
