function solution(num) {
  let count = 0;
  while (num > 0) {
    if (num === 1) break;
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
    if (count >= 500) {
      count = -1;
      break;
    }
  }
  console.log(count);
  return count;
}