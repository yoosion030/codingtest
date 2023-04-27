function solution(rank, attendance) {
  let test = [];
  attendance.map((v, i) => v && test.push({ rank: rank[i], number: i }));
  test.sort((a, b) => a.rank - b.rank);
  return 10000 * test[0].number + 100 * test[1].number + test[2].number;
}
