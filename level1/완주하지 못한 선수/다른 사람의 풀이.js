function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

function solution(participant, completion) {
  /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
