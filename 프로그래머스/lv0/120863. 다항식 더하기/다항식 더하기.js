function solution(polynomial) {
  polynomial = polynomial.split(" + ");
  let x = polynomial
    .filter((v) => v.includes("x"))
    .map((v) => {
      v = Number(v.replaceAll("x", ""));
      if (v === 0) return 1;
      return v;
    })
    .reduce((a, b) => a + b, 0);
  if (x === 1) x = "";

  let number = polynomial
    .filter((v) => !v.includes("x"))
    .reduce((a, b) => Number(a) + Number(b), 0);

  if (x === 0) return `${number}`;
  else if (number === 0) return `${x}x`;
  else return `${x}x + ${number}`;
}