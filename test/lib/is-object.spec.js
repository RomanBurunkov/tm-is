const { isObject, isObj } = require('../../index');

describe('Test isObject function', () => {
  test('isObject is defined.', () => expect(isObject).toBeDefined());
  test('isObj is defined.', () => expect(isObj).toBeDefined());
  test('isObj is equal isObject.', () => expect(isObj).toBe(isObject));

  [[{}], [{}, {}]].forEach((val) => {
    test(`isObject returns true if ${val.length} object(s) passed`, () => {
      expect(isObject(...val)).toBe(true);
    });
  });

  test('isObject returns false if nothing passed', () => {
    expect(isObject()).toBe(false);
  });

  ['string', null, 5, undefined].forEach((val) => {
    test(`isObject returns false if ${val} passed`, () => {
      expect(isObject(val)).toBe(false);
    });
  });

  test('isObject returns false if object and string passed', () => {
    expect(isObject({}, 'string')).toBe(false);
  });
});
