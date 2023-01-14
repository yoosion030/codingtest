function solution(x) {
  let xArr = x.toString().split("");
  let sum = 0;
  xArr.map((arr) => (sum += parseInt(arr)));

  return x % sum === 0 ? true : false;
}
