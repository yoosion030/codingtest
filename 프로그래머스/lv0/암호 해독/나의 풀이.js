function solution(cipher, code) {
  return cipher
    .split("")
    .filter((value, index) => (index + 1) % code === 0)
    .join("");
}
