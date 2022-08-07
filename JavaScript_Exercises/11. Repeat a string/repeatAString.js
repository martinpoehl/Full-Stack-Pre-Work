function repeat_string_num_times(str, num) {
    let repStr = "";
    for(let i=1; i<=num; i++) {
        repStr = repStr + str;
    }
    return repStr;
}

console.log(repeat_string_num_times("abc", 3));
console.log(repeat_string_num_times("abc", 1));
console.log(repeat_string_num_times("abc", 0));
console.log(repeat_string_num_times("abc", -1));