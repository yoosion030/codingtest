function solution(keyinput, board) {
  let answer = [0, 0];
  let key = {
    left: -1,
    right: 1,
    up: 1,
    down: -1,
  };

  keyinput
    .filter((v) => v === "left" || v === "right")
    .map((v) => {
      if (Math.abs(answer[0] + key[v]) <= Math.floor(board[0] / 2))
        answer[0] += key[v];
    });

  keyinput
    .filter((v) => !(v === "left" || v === "right"))
    .map((v) => {
      if (Math.abs(answer[1] + key[v]) <= Math.floor(board[1] / 2))
        answer[1] += key[v];
    });

  return answer;
}