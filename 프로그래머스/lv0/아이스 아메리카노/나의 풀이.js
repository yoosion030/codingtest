const solution = (money) => [
  parseInt(money / 5500),
  money - parseInt(money / 5500) * 5500,
];
