function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(index, sum) {
    let value = numbers[index];
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum - value);
    dfs(index + 1, sum + value);
  }
  return answer;
}