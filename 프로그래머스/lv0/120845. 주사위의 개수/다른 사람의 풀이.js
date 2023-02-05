function solution(box, n) {
  let [width, length, height] = box;

  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}

function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}
