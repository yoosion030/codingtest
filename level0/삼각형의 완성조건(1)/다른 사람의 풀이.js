function solution(sides) {
  var answer = 0;
  const max = Math.max(...sides);
  const sum = sides.reduce((a, b) => a + b, 0) - max;

  answer = max < sum ? 1 : 2;

  return answer;
}

function solution(sides) {
  var maxSide = Math.max(...sides);
  var sumOfShortSides =
    sides.reduce((sum, el) => {
      return sum + el;
    }, 0) - maxSide;

  if (sumOfShortSides > maxSide) {
    return 1;
  } else {
    return 2;
  }
}
