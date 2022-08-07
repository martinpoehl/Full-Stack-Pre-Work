function is_power_of_two(num) {
    if(num === 1){
        return true;
     };
     if(num % 2 !== 0){
        return false;
     }
     return is_power_of_two(num / 2);
}

console.log(is_power_of_two(8));
console.log(is_power_of_two(16));
console.log(is_power_of_two(32));
console.log(is_power_of_two(12));
console.log(is_power_of_two(24));