function solution(num_list, n) {
  let answer = Array.from(Array(num_list.length / n), () => new Array(n));
  num_list.map((value, index) => {
    answer[Math.floor(index / n)][index % n] = value;
  });
  return answer;
}
