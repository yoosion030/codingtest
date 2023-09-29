function solution(nums) {
  const hashMap = {}; // 해시 맵 생성

  // 해시 맵에 폰켓몬 종류 번호를 기록
  for (const num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num]++;
    }
  }

  const uniquePokemonCount = Object.keys(hashMap).length; // 다양한 종류의 폰켓몬 개수
  const maxSelectCount = nums.length / 2; // 선택해야 하는 최대 폰켓몬 개수

  // 다양한 종류의 폰켓몬 개수와 선택해야 하는 최대 폰켓몬 개수 중 작은 값을 반환
  return Math.min(uniquePokemonCount, maxSelectCount);
}