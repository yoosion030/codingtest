function solution(numlist, n) {
  numlist = numlist.sort((a, b) => b - a);
  let sortlist = numlist.map((v, i) => Math.abs(n - v));
  let answer = [];

  while (sortlist.length >= 1) {
    let minIndex = sortlist.indexOf(Math.min(...sortlist));
    answer.push(numlist[minIndex]);
    sortlist.splice(minIndex, 1);
    numlist.splice(minIndex, 1);
  }

  return answer;
}