function solution(array, n) {
  array.sort((a, b) => a - b);

  let minusArray = array.map((v, i) => {
    if (v > n) return v - n;
    else return n - v;
  });

  let index = minusArray.indexOf(Math.min(...minusArray));
  return array[index];
}
