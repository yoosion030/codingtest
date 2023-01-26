function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}

function solution(numbers) {
  const buckets = [];

  for (const n of numbers) {
    const s = String(n),
      l = s.length;

    let j = "";
    for (let i = 0; i < 4; i++) {
      j += s[l > i ? i : i % l];
    }
    j = 9999 - j;

    buckets[j] = buckets[j] ? buckets[j] + s : s;
  }

  const ans = buckets.join``;

  return ans[0] === "0" ? "0" : ans;
}
