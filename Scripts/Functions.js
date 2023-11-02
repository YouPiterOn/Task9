
function getFactorial(num) {
    if (isNaN(num) || num < 0) {
        return 'not a number';
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * getFactorial(num - 1);
}

function multiply(x) {
    let product = x;

    function multiplyNext(y) {
        product *= y;
        return multiplyNext;
    }
    multiplyNext.toString = function () {
        return product;
    };

    return multiplyNext;
}

module.exports = { getFactorial, multiply};






