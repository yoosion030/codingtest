/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}

function solution(rsp) {
  return rsp
    .split("")
    .map((v) => (v === "2" ? 0 : v === "0" ? 5 : 2))
    .join("");
}
