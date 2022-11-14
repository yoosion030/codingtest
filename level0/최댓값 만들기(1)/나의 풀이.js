function solution(numbers) {
  const maxArr = numbers.sort((a, b) => a - b).reverse();
  return maxArr[0] * maxArr[1];
}
