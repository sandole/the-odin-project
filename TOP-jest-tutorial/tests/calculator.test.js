const calculator = require('../calculator');

const calc = new calculator()

test('calculate 12+34', () => {
    expect(calc.add(12,34)).toBe(46);
});

test('calculate 12-34', () => {
    expect(calc.subtract(12,34)).toBe(-22);
});

test('calculate 12*34', () => {
    expect(calc.multiply(12,34)).toBe(408);
});

test('calculate 12/34', () => {
    expect(calc.divide(12,34)).toBe(0.35294117647058826);
});