function solution(nums) {
  const kind = [...new Set(nums)];
  return nums.length / 2 < kind.length ? nums.length / 2 : kind.length;
}