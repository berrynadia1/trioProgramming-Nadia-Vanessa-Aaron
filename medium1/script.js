function findVowel (letters){
    var vowels = ["a", "e", "i", "o", "u"]
    for (var i = 0; i < vowels.length; i++){
        if (letters === vowels[i]){
            return ("This is a vowel");
        }
    }
    return ("This not a vowel");
};

console.log(findVowel("a"))
console.log(findVowel("z"))