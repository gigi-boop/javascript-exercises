const reverseString = function (string) {
    const splitString = string.split("");
    const reversedArray = [];

    for (let i = 1; i <= splitString.length; i++) {
        reversedArray.push(splitString[splitString.length - i]);
    }

    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
