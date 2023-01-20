function solution(common) {
  let d = common[1] - common[0];
  // 등차수열
  if (d === common[2] - common[1]) {
    return d + common.at(-1);
  } else {
    // 등비 수열
    return (common[1] / common[0]) * common.at(-1);
  }
}
