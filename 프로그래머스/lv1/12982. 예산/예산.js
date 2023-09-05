function solution(d, budget) {

  return d.sort((a, b) => a - b).filter((v) => {
    budget -= v;
    return budget >= 0;
  }).length;
}