function nearby_az(string) {
    lowString = string.toLowerCase();
    arrString = string.split("");
    for(let i=0; i<=arrString.length; i++) {
        if(arrString[i]==="a") {
            if(arrString[i+1]==="z") {
                return true;
            } else if(arrString[i+2]==="z") {
                return true;
            } else if(arrString[i+3]==="z") {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(nearby_az("abbbz"));
console.log(nearby_az("abz"));
console.log(nearby_az("abcz"));
console.log(nearby_az("abba"));