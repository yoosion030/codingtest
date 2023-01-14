function solution(array) {
  return array
    .sort((a, b) => {
      return a - b;
    })
    .at(Math.floor(array.length / 2));
}
