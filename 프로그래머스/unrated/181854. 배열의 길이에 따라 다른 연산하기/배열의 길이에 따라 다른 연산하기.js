function solution(arr, n) {
  return arr.map((v, i) => {
    let isArrOdd = arr.length % 2 !== 0;
    let isIndexOdd = i % 2 !== 0;

    if (isArrOdd && !isIndexOdd) return v + n;
    else if (!isArrOdd && isIndexOdd) return v + n;
    return v;
  });
}
