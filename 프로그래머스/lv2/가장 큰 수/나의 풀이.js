function solution(numbers) {
  numbers.sort((a, b) => {
    a = (a.toString() + a + a + a).substr(0, 4);
    b = (b.toString() + b + b + b).substr(0, 4);

    return b - a;
  });

  if (numbers[0] === 0) return "0";
  else return numbers.join("");
}
