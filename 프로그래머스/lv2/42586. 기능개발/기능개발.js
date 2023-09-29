function solution(progresses, speeds) {
  const workDay = [];
  const answer = [];

  for (let i = 0; i < progresses.length; i++) {
    workDay.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 1;
  let base = workDay[0];

  while (workDay.length !== 0) {
    if (base >= workDay[1]) {
      count++;
      workDay.shift();
    } else {
      answer.push(count);
      workDay.shift();
      count = 1;
      base = workDay[0];
    }
  }

  return answer;
}