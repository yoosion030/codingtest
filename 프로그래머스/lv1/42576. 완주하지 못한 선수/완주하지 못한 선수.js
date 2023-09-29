function solution(participant, completion) {
  const hashMap = {}; // 해시 맵 생성

  for (const name of participant) {
    if (!hashMap[name]) {
      hashMap[name] = 1;
    } else {
      hashMap[name]++;
    }
  }

  for (const name of completion) {
    hashMap[name]--;
  }

  // value 값이 1인 key 찾기
  for (const name in hashMap) {
    if (hashMap[name] === 1) {
      return name;
    }
  }
}