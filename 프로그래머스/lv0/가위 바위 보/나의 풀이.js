function solution(rsp) {
  return rsp
    .split("")
    .map((value) => {
      switch (value) {
        case "0":
          return "5";
        case "2":
          return "0";
        case "5":
          return "2";
      }
    })
    .join("");
}
