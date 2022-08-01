function solution(absolutes, signs) {
  let result = absolutes.map((value, index, arr) =>
    signs[index] ? value : -value
  );

  return result.reduce((a, b) => a + b);
}
