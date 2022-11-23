function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];

  return vowel.map((value) => (my_string = my_string.replaceAll(value, "")))[4];
}
