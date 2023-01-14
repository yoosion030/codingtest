function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}
