function solution(phone_book) {
  const phoneBookHash = {}; // 전화번호부를 저장할 해시 맵

  // 전화번호부에 있는 전화번호를 해시 맵에 저장
  for (const phoneNumber of phone_book) {
    phoneBookHash[phoneNumber] = true;
  }

  // 전화번호부를 다시 순회하면서 각 전화번호가 다른 번호의 접두어인지 확인
  for (const phoneNumber of phone_book) {
    for (let i = 1; i < phoneNumber.length; i++) {
      const prefix = phoneNumber.slice(0, i); // 접두어 추출
      if (phoneBookHash[prefix]) {
        return false; // 다른 번호의 접두어인 경우 false 반환
      }
    }
  }

  return true; // 모든 전화번호가 접두어가 아닌 경우 true 반환
}