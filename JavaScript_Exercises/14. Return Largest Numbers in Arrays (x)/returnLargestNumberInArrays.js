function largest_of_four(arr) {
    const largestArr = [];
    let temp = 0;
    
    for(let i=0; i<arr.length; i++) {
        arr[[i],[i]].forEach((element) => {
            if (largestArr < element) {
              largestArr.push(element);
            }
          });
    }
    console.log(temp);
return largestArr;
}

console.log(largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [27,5,39,1001]