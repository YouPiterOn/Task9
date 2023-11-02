const chai = require('chai');
const expect = chai.expect;
const { getFactorial, multiply } = require('./Scripts/Functions.js');

const result = multiply(2)(3)(10); 
console.log(result.toString());  

describe('getFactorial', () => {
    it('correct return 0', () => {
        expect(getFactorial(0)).to.equal(1);
    });

    it('correct return 1', () => {
        expect(getFactorial(1)).to.equal(1);
    });

    it('correct return normal', () => {
        expect(getFactorial(5)).to.equal(120);
    });

    it('not a number <0', () => {
        expect(getFactorial(-3)).to.equal('not a number');
    });

    it('not a number text', () => {
        expect(getFactorial('abc')).to.equal('not a number');
    });
});

describe('multiply', () => {
    it('correct return', () => {
        const result = multiply(2)(3)(4); // 2 * 3 * 4 = 24
        expect(result.toString()).to.equal(24);
    });
});