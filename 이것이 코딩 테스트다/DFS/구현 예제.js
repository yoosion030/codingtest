const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const dfs = (graph, start) => {
  const visited = []; // 탐색을 마친 노드들
  const needVisit = []; // 탐색해야할 노드들

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.pop(); // 스택(Last In First Out)
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit.push(...graph[node].reverse());
    }
  }
  return visited;
};
console.log(dfs(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]
