function factorial(n) {
    if(n < 0) {
        return "n must be > or = to 0";
    } else if(n == 0) {
        return 1;
    } else {
        for(let i=n-1; i>=1; i--) {
            n*=i;
        }
        return n;
    }
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(-1));