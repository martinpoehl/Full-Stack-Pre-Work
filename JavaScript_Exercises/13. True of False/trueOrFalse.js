function is_it_true(args) {
    if(typeof args === "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log(is_it_true(true));
console.log(is_it_true(false));
console.log(is_it_true('true'));
console.log(is_it_true(1));
console.log(is_it_true('false'));
