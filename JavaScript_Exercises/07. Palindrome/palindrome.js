function palindrome(string) {
    let re = /[\W_]/g; // \W for any non-word characters like space /g for global search
    let lowRegStr = string.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join(""); 
    return reverseStr === lowRegStr;
}

console.log(palindrome("ABBA"));
console.log(palindrome("AbbA"));
console.log(palindrome("abcd"));