function sum_nums(num) {
    let number = 0;
    for(let i=0; i<=num; i++) {
        number += i;
    }
    return number;
}

console.log(sum_nums(6));
console.log(sum_nums(1));
console.log(sum_nums(0));