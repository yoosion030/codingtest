function solution(s) {
  let res = [];
  // 탐색 중인 값이랑 역순으로 탐색하여 값이 다르면 중복. 같으면 한번만 등장한 문자.
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
