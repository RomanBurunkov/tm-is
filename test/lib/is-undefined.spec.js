const { isUndefined, isUndef } = require('../../index');

describe('Test isUndefined function', () => {
  test('isUndef is defined.', () => expect(isUndef).toBeDefined());
  test('isUndefined is defined.', () => expect(isUndefined).toBeDefined());

  test('isUndefined returns true if undefined passed', () => {
    expect(isUndefined()).toBe(true);
  });

  ['string', null, 5].forEach((val) => {
    test(`isUndefined returns false if ${val} passed`, () => {
      expect(isUndefined(val)).toBe(false);
    });
  });
});