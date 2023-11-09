function solution(numbers, hand) {
  const left = [[3, 0]];
  const right = [[3, 2]];
  let result = "";

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  while (numbers.length > 0) {
    const current = numbers.shift();
    if ([1, 4, 7].includes(current)) {
      moveLeft();
    } else if ([3, 6, 9].includes(current)) {
      moveRight();
    } else {
      const leftDistance = calcDistance(keypad[current], left[left.length - 1]);
      const rightDistance = calcDistance(
        keypad[current],
        right[right.length - 1]
      );

      if (leftDistance < rightDistance) {
        moveLeft();
      } else if (rightDistance < leftDistance) {
        moveRight();
      } else if (leftDistance === rightDistance) {
        if (hand === "left") moveLeft();
        else moveRight();
      }
    }

    function moveLeft() {
      left.push(keypad[current]);
      result += "L";
    }

    function moveRight() {
      right.push(keypad[current]);
      result += "R";
    }

    function calcDistance(a, b) {
      const [x1, y1] = a;
      const [x2, y2] = b;

      return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
  }

  return result;
}
