function solution(price, money, count) {
  let use = 0;
  while (use !== count) {
    money -= price * use;
    use++;
  }
  return money >= 0 ? 0 : price * use - money;
}