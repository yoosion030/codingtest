function solution(phone_number) {
  let star = phone_number.split("").slice(0, -4);
  arr = phone_number.split("").slice(-4).join("");

  for (let i = 0; i < star.length; i++) {
    star[i] = "*";
  }
  star = star.join("");

  return star + arr;
}
