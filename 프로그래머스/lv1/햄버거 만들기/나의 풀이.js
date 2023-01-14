function solution(ingredient) {
  const result = ingredient.join("").match(/1231/);
  if (result === null) return 0;
  else {
  }

  return 0;
}
// 1 = 빵
// 2 = 야채
// 3 = 고기
// 햄버거 = 빵 야채 고기 빵
// [1, 2, 3, 1]
solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
solution([1, 2, 3, 1, 1, 2, 3, 1]);

// 스택 이용
// 배열에 한개씩 복사 후
// 배열 길이가 4일 때 아닐때 구분하여 배열 길이가 4일때 재료 확인
// 1231 패턴 확인하면 배열에 제거
