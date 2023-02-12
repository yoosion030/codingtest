// 거스름돈 동전 개수 구하기
// 500원, 100원 , 50원, 10원 동전이 무한히 존재
function solution(money) {
  let count = 0;
  let moneyArray = [500, 100, 50, 10];
  for (let i = 0; i < moneyArray.length; i++) {
    count += parseInt(money / moneyArray[i]);
    money = money % moneyArray[i];
  }
  console.log(count);
}

solution(1260)
