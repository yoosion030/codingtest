function solution(array) {
  let max = (i = 0);
  for (let si in array)
    if (max < array[si]) {
      max = array[si];
      i = Number(si);
    }
  return [max, i];
}
