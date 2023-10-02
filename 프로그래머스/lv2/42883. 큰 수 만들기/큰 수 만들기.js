function solution(number, k) {
  const stack = [];

  for (const digit of number) {
    // 스택이 비어있지 않고, 스택의 마지막 숫자가 현재 숫자보다 작으면 스택에서 제거
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }

    // 현재 숫자를 스택에 추가
    stack.push(digit);
  }

  // k개의 숫자를 제거하지 못한 경우, 뒤에서부터 남은 k개 숫자를 제거
  while (k > 0) {
    stack.pop();
    k--;
  }

  // 스택에 남은 숫자들을 문자열로 합쳐서 반환
  return stack.join("");
}