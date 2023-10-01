function solution(brown, yellow) {
  const total = brown + yellow;
  const arr = [];
  for (let height = 3; height <= total; height++) {
    if (total % height === 0) {
      const width = total / height;
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}