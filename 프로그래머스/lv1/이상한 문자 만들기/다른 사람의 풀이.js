function toWeirdCase(s) {
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

function toWeirdCase(s) {
  return s
    .split(" ")
    .map((a) => {
      return a
        .split("")
        .map((b, i) => {
          return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
