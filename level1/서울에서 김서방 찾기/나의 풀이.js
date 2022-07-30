function solution(seoul) {
  let index = 0;
  seoul.map((value, i) => (value === "Kim" ? (index = i) : null));

  return `김서방은 ${index}에 있다`;
}
