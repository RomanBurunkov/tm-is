const { isObject } = require('../../index');

describe('Test isObject function', () => {
  test('isObject is defined.', () => expect(isObject).toBeDefined());

  test('isObject returns true if object passed', () => {
    expect(isObject({})).toBe(true);
  });

  ['string', null, 5].forEach((val) => {
    test(`isObject returns false if ${val} passed`, () => {
      expect(isObject(val)).toBe(false);
    });
  });
});