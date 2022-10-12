const removeFromArray = function (array, ...argumentsToBeRemoved) {
    let index = 0;

    for (i = 0; i < array.length && index < argumentsToBeRemoved.length; ) {
        if (array[i] !== argumentsToBeRemoved[index]) {
            i++;
        } else if (array[i] === argumentsToBeRemoved[index]) {
            array.splice(i, 1);
            index++;
            i = 0;
        }

        if (
            array[i] === array[array.length - 1] &&
            array[i] !== argumentsToBeRemoved[index]
        ) {
            index++;
            i = 0;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
