function add_all(arr) {
    let provArr = [];
    let result = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let i = arr[0]; i <= arr[1]; i++) {
        provArr.push(i);
    }

    result = provArr.reduce(reducer);
    return result;
}

console.log(add_all([1, 4]));
console.log(add_all([5, 10]));
console.log(add_all([9, 10]));
console.log(add_all([0, 0]));
console.log(add_all([-1, 1]));