function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

function solution(s1, s2) {
  let count = 0;
  for (let v of s1) if (s2.includes(v)) count++;
  return count;
}
