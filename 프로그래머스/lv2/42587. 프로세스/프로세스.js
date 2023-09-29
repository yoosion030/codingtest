function solution(priorities, location) {
  let count = 0;
  while (priorities.length !== 0) {
    let max = Math.max(...priorities);
    // 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
    let pending = priorities.shift();

    // 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
    if (max > pending) {
      priorities.push(pending);
      if (location === 0) location = priorities.length;
    } else {
      // 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
      count++;
      // 3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
      if (location === 0) return count;
    }

    location--;
  }
}