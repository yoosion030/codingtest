function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}

const CONTROL = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(key, [n, m]) {
  const [x1, x2] = [-(n - 1) / 2, (n - 1) / 2];
  const [y1, y2] = [-(m - 1) / 2, (m - 1) / 2];
  return key.reduce(
    ([x, y], k) => {
      const [nx, ny] = [x + CONTROL[k][0], y + CONTROL[k][1]];
      if (x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
      return [x, y];
    },
    [0, 0]
  );
}
