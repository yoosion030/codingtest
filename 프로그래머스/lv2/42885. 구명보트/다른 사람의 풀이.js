function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.shift();
      people.pop();
    } else {
      people.shift();
    }
    count++;
  }
  return count;
}
