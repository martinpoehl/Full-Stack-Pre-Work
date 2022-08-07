function longest_word(sentence) {
    let sentenceWords = sentence.split(" ");
    sentenceWords.sort(function(a,b) {
        return b.length - a.length;
    });
return sentenceWords[0];
}

console.log(longest_word("This is an amazing test"));
console.log(longest_word("Steve Carell"));
console.log(longest_word("SIT Academy 123"));