function solution(emergency) {
  let sortArray = [...emergency];
  let countArray = [];

  emergency.sort((a, b) => b - a);

  emergency.map((arr, idx) => {
    sortArray.map((value, index) => {
      if (arr === value) {
        countArray[index] = idx + 1;
      }
    });
  });

  return countArray;
}
