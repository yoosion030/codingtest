function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    const [id, pw] = db[i];
    if (id_pw[0] === id && id_pw[1] === pw) return "login";
    if (id_pw[0] === id) return "wrong pw";
  }
  return "fail";
}
