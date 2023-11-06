function solution(s) {
  s = s.toLowerCase();
  const pCount = s.split('p').length - 1;
  const yCount = s.split('y').length - 1;
  return pCount === yCount;
}