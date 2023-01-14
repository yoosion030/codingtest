function solution(num_list) {
  const answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
