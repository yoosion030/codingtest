function solution(price) {
  if (price >= 100000) {
    if (price >= 300000) {
      if (price >= 500000) {
        return Math.floor(price - price * (1 / 5));
      } else {
        return Math.floor(price - price * (1 / 10));
      }
    } else {
      return Math.floor(price - price * (1 / 20));
    }
  } else {
    return price;
  }
}
