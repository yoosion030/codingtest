function solution(participant, completion) {
  let obj = {};
  let answer = "";
  participant.map((value, i) => {
    obj[value] = obj[value] ? obj[value] + 1 : 1;
  });

  completion.map((value, i) => {
    obj[value] -= 1;
  });

  participant.map((value, i) => {
    if (obj[value] > 0) {
      answer = value;
    }
  });

  return answer;
}