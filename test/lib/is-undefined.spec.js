const { isUndefined, isUndef } = require('../../index');

describe('Test isUndefined function', () => {
  test('isUndef is defined.', () => expect(isUndef).toBeDefined());
  test('isUndefined is defined.', () => expect(isUndefined).toBeDefined());

  test('isUndefined returns true if nothing passed', () => {
    expect(isUndefined()).toBe(true);
  });

  test('isUndefined returns true if undefined passed', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test('isUndefined returns true if several undefined passed', () => {
    expect(isUndefined(undefined, undefined)).toBe(true);
  });

  ['string', null, 5].forEach((val) => {
    test(`isUndefined returns false if ${val} passed`, () => {
      expect(isUndefined(val)).toBe(false);
    });
  });

  test('isUndefined returns false if several undefined and string passed', () => {
    expect(isUndefined(undefined, undefined, 'string')).toBe(false);
  });
});
