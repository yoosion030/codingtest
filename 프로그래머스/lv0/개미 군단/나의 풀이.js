function solution(hp) {
  let 장군개미 = Math.floor(hp / 5);
  let 병정개미 = Math.floor((hp % 5) / 3);
  let 일개미 = Math.floor((hp % 5) % 3);

  return 장군개미 + 병정개미 + 일개미;
}
