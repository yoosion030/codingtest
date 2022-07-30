function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s) {
  return "*".repeat(s.length - 4) + s.slice(-4);
}
