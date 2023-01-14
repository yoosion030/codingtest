function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

var solution = (e) => e.map((x) => [...e].sort((a, b) => b - a).indexOf(x) + 1);
