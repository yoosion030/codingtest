function solution(sides) {
  sides.sort();
  return sides[0] + sides[1] <= sides[2] ? 2 : 1;
}
