function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
}

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}

function solution(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (val) {
    money += val;
    if (money <= budget) {
      answer++;
    }
  });
  return answer;
}
