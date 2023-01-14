function solution(angle) {
  console.log([0, 90, 91, 180].filter((x) => angle >= x));
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
