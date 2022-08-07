function two_sum(nums) {
    for(let i=0; i<=nums.length; i++) {
        for(let j=1; nums.length; j++) {
            if(nums[i]+nums[j]===0) {
                return nums[i,j];
            } else if(nums[i]+nums[j+1]===0) {

            } else if(nums[i]+nums[j+2]===0) {

            }
        }
    return nums[i,j];
    }
}

console.log(two_sum([1, 3, -1, 5])); // [[0, 2]]
two_sum([1, 3, -1, 5, -3]) // [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]) // null