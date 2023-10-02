function solution(babbling) {
  const patterns = ["aya", "ye", "woo", "ma"];
  for (const pattern of patterns) {
    babbling = babbling.map((v) => v.replace(pattern, "."));
  }

  return babbling.map((v) => v.replaceAll(".", "")).filter((v) => v === "")
    .length;
}
