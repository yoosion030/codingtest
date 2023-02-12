function solution(arr1, arr2) {
  // 각 배열당 최소값을 비교하여 결과 산출
  return Math.min(...arr1) > Math.min(...arr2)
    ? Math.min(...arr1)
    : Math.min(...arr2);
}
