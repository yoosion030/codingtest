function solution(board, moves) {
  board = board.map((_, col) => {
    return board
      .map((_, row) => {
        return board[row][col];
      })
      .filter((v) => v);
  });

  const pocket = [];
  let result = 0;

  while (moves.length > 0) {
    const doll = board[moves.shift() - 1].shift();
    if (doll) {
      const top = pocket.pop();
      if (top === doll) {
        result += 2;
        continue;
      }
      pocket.push(top);
      pocket.push(doll);
    }
  }

  return result;
}