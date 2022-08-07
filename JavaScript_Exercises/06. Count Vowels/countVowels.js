function count_vowels(string) {
    let letters = string.toLowerCase().split("");
    let numberOfVowels = 0;

    for(let i=0; i<=letters.length; i++) {
        if(letters[i]==="a") {
            numberOfVowels++;
        } else if(letters[i]==="e") {
            numberOfVowels++;
        } else if(letters[i]==="i") {
            numberOfVowels++;
        } else if(letters[i]==="o") {
            numberOfVowels++;
        } else if(letters[i]==="u") {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
}

console.log(count_vowels("alphabet")); // 3
console.log(count_vowels("SIT Academy")); // 4
console.log(count_vowels("AaaAa")); // 5
console.log(count_vowels("fly")); // 0
