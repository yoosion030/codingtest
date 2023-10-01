function solution(sizes) {
  const maxArr = [];
  const minArr = [];
  sizes.map(([x, y]) => {
    if (x >= y) {
      maxArr.push(x);
      minArr.push(y);
    } else {
      maxArr.push(y);
      minArr.push(x);
    }
  });
  maxArr.sort((a, b) => b - a);
  minArr.sort((a, b) => b - a);

  return maxArr[0] * minArr[0];
}