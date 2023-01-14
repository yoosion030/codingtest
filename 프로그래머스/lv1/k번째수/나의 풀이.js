function solution(array, commands) {
  return commands.map((value, index) => {
    let answer = array.slice(value[0] - 1, value[1]).sort((a, b) => a - b);
    return answer[value[2] - 1];
  });
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
