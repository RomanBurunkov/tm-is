const { isObject, isObj } = require('../../index');

describe('Test isObject function', () => {
  test('isObject is defined.', () => expect(isObject).toBeDefined());
  test('isObj is defined.', () => expect(isObj).toBeDefined());
  test('isObj is equal isObject.', () => expect(isObj).toBe(isObject));

  test('isObject returns true if object passed', () => {
    expect(isObject({})).toBe(true);
  });

  ['string', null, 5].forEach((val) => {
    test(`isObject returns false if ${val} passed`, () => {
      expect(isObject(val)).toBe(false);
    });
  });
});