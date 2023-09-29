function solution(participant, completion) {
  const nameCount = {}; // 출현 횟수를 저장할 객체

  // 참가자 명단 출현 횟수 기록
  for (const name of participant) {
    nameCount[name] = (nameCount[name] || 0) + 1;
  }

  // 완주자 명단 출현 횟수 차감
  for (const name of completion) {
    nameCount[name]--;
  }

  // 출현 횟수가 1인 이름 반환
  for (const name of participant) {
    if (nameCount[name] === 1) {
      return name;
    }
  }
}
