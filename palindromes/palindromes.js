const palindromes = function(pal) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const removePunct = pal.replace(regex, "");
    const removeSpace = removePunct.split(" ").join("");
    const reversePal = reverseStr(removeSpace);
    removeSpace.toLowerCase();
    reversePal.toLowerCase();

    if (removeSpace.toLowerCase() === reversePal.toLowerCase()) {
        return true;
    } else { return false;}

    function reverseStr(oldStr) {
        let newStr = "";
        for (let i = oldStr.length - 1; i >= 0; i--) { 
            newStr += oldStr[i]; // or newString = newString + str[i];
        }
        return newStr; 
    }
}

module.exports = palindromes
