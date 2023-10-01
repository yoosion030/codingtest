function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [0, 0, 0];

  answers.map((v, i) => {
    if (v === one[i % one.length]) result[0]++;
    if (v === two[i % two.length]) result[1]++;
    if (v === three[i % three.length]) result[2]++;
  });

  return result
    .map((v, i) => {
      if (Math.max(...result) === v) return i + 1;
    })
    .filter((v) => v);
}