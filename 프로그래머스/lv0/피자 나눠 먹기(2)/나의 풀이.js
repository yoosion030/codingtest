let getLCM = (num1) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % 6 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

function solution(n) {
  return getLCM(n) / 6;
}

solution(10);
