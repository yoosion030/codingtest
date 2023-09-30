function solution(prices) {
  const answer = new Array(prices.length).fill(0); // 결과를 저장할 배열 초기화
  const stack = []; // 주식 가격의 인덱스를 저장할 스택

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 현재 주식 가격이 스택의 가장 위에 있는 인덱스의 주식 가격보다 작다면
      const top = stack.pop(); // 스택에서 인덱스를 꺼내고
      answer[top] = i - top; // 현재 시간과 스택에서 꺼낸 시간의 차이를 계산하여 저장
    }
    stack.push(i); // 현재 주식 가격의 인덱스를 스택에 저장
  }

  // 스택에 남아있는 인덱스들은 주식이 끝까지 떨어지지 않은 경우로, 끝까지의 시간을 계산
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  return answer;
}
