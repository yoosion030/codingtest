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

solution([1, 2, 3, 4, 5, 6], 4);
// solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30);
