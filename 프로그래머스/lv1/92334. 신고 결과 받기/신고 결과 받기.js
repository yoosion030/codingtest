function solution(id_list, report, k) {
  let reportSet = [...new Set(report)];
  let reporter = Array.from({ length: id_list.length }, () => 0);
  let punisher = Array.from({ length: id_list.length }, () => 0);

  const relation = {};

  reportSet.forEach((str) => {
    const [name1, name2] = str.split(" ");
    if (!relation[name1]) {
      relation[name1] = [];
    }
    relation[name1].push(name2);
    let index = id_list.indexOf(name2);

    punisher[index] += 1;
  });

  punisher.map((v, i) => {
    if (v >= k) {
      for (const key in relation) {
        if (relation[key].includes(id_list[i])) {
          let index1 = id_list.indexOf(key);
          reporter[index1] += 1;
        }
      }
    }
  });

  return reporter;
}