function solution(num_list) {
  let answer = [];
  answer[0] = num_list.filter((val) => val % 2 === 0).length;
  answer[1] = num_list.filter((val) => val % 2 !== 0).length;
  return answer;
}
