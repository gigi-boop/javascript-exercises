const sumAll = function (...args) {
    //checks that there are two arguments, and checks that each argument is type number and is not negative
    //returns true only if all arguments pass the tests
    const valid = args.every(function (arg) {
        return typeof arg === typeof 1 && arg > 0 && args.length === 2;
    });

    if (valid === false) {
        return "ERROR";
    }

    args.sort(function (a, b) {
        return a - b;
    });

    let range = args[0];
    let result = args[0];

    for (let i = args[0]; i < args[1]; i++) {
        range += 1;
        result += range;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
