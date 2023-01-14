function solution(num, k) {
  let ind = ("" + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}

function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
