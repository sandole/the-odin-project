const capitalize = require('../capitalize');

test('capitalize the word: "Hello"', () => {
    expect(capitalize("Hello")).toBe("Hello");
});

test('capitalize the word: "abcdef"', () => {
    expect(capitalize("abcdef")).toBe("Abcdef");
});

test('capitalize the word: ""', () => {
    expect(capitalize("")).toBe("");
});