function solution(array) {
  // 중복 제거
  const filterArray = [...new Set(array)];
  let countArr = [];

  filterArray.map((value, i) => {
    countArr[i] = array.filter((arr) => arr === value).length;
  });
  const max = Math.max(...countArr);

  return countArr.filter((value) => value === max).length >= 2
    ? -1
    : filterArray[countArr.indexOf(max)];
}
