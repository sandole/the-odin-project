const reverseString = require('../reverseString');

test('reverse the string: "Hello"', () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test('reverse the string: "abcdef"', () => {
    expect(reverseString("abcdef")).toBe("fedcba");
});

test('reverse the string: ""', () => {
    expect(reverseString("")).toBe("");
});
