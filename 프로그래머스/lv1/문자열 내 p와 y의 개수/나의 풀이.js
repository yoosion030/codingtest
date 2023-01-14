function solution(s) {
  let pCount = 0,
    yCount = 0;
  s.split("").map((value, index) => {
    if (value === "p" || value === "P") pCount++;
    if (value === "y" || value === "Y") yCount++;
  });

  return pCount === yCount ? true : false;
}
