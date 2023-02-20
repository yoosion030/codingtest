// 1. 특정한 지점의 주변 상, 화, 좌, 우를 살펴본 뒤에 주변 지점 중에서 값이 0이면서
// 아직 방문하지 않은 지점이 있다면 해당 지점을 방문한다.
// 2. 방문한 지점에서 다시 상, 하, 좌, 우를 살펴보면서 방문을 다시 진행하면,
// 연결된 모든 지점을 방문할 수 있다.
// 3. 1 ~ 2번의 과정을 모든 노드에 반복하며 방문하지 않은 지점의 수를 센다.

let result = 0;

let graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

function dfs(x, y) {
  if (y <= -1 || y >= graph.length || x <= -1 || x >= graph[0].length)
    return false;
  if (graph[y][x] === 0) {
    graph[y][x] = 1;
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }

  return false;
}

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    if (dfs(j, i) === true) result++;
  }
}
