var config = require('./../src/config')

test('expected to be true', () => {
    expect(true).toBe(true);
});

test('test output of data', () => {
    expect(config.getData()).toBeLessThan(7);
})
