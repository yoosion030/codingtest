function solution(n, words) {
  let answer = [0, 0];
  let queue = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (i === 0) {
      queue.push(word);
      continue;
    }

    if (
      queue[queue.length - 1].split("").at(-1) !== word?.at(0) ||
      queue.includes(word)
    ) {
      answer = [(i % n) + 1, Math.floor(i / n + 1)];
      break;
    }
    queue.push(word);
  }
  return answer;
}