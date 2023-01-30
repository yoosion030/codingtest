let solution = (r, n) =>
  r
    .map((e) => [e, Math.abs(e - n)])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0];

function solution(array, n) {
  var answer = 0;

  array.forEach(function (data) {
    if (Math.abs(answer - n) > Math.abs(data - n)) {
      answer = data;
    } else if (Math.abs(answer - n) == Math.abs(data - n)) {
      answer = answer > data ? data : answer;
    }
  });

  return answer;
}
