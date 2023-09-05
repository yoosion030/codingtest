function solution(d, budget) {
  let arr = d.sort((a, b) => a - b);

  return arr.filter((v) => {
    budget -= v;

    return budget >= 0;
  }).length;
}