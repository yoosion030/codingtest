function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    let max = people.pop();

    if (people[0] + max <= limit) {
      people.shift();
    }
    count += 1;
  }
  return count;
}