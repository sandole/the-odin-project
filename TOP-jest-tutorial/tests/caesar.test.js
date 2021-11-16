const caesar = require('../caesar');

test('caesarcipher "hello world" by 2', () => {
    expect(caesar("hello world",2)).toBe("jgnnq yqtnf");
});

test('caesarcipher "abc123!;," by 25', () => {
    expect(caesar("abc123!;,",25)).toBe("zab123!;,");
});

test('caesarcipher "abc123!;," by 0', () => {
    expect(caesar("abc123!;,",0)).toBe("abc123!;,");
});
