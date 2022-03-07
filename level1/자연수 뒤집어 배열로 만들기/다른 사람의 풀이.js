function solution(n) {

    let arr = [];

    do {
        arr.push(n%10);// 12345 -> 5
        n = Math.floor(n/10); // n = 1234
    } while (n>0);

    return arr;
}
