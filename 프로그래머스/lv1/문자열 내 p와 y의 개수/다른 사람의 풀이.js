function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
