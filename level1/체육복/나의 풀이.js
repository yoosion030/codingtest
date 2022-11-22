function solution(n, lost, reserve) {
  // n길이 만큼 1로 채운 배열 생성
  let students = Array(n).fill(1);

  // 체육복 가져온 학생들 index 1씩 증가
  reserve.map((value) => students[value - 1]++);

  // 체육복 잃어버린 학생들 index 1씩 감소
  lost.map((value) => students[value - 1]--);

  students.map((value, idx) => {
    // 왼쪽 값
    if (value >= 2 && students[idx - 1] === 0) {
      if (idx === 0) return;
      students[idx - 1]++;
      students[idx]--;
    }
    // 오른쪽 값
    else if (value >= 2 && students[idx + 1] === 0) {
      if (idx === students.length - 1) return;
      students[idx + 1]++;
      students[idx]--;
    }
  });

  // 1 이상 값들만 모아서 그 배열의 길이 출력
  return students.filter((value) => value >= 1).length;
}
