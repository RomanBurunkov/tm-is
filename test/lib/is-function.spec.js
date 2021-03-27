const { isFunction, isFunc } = require('../../index');

describe('Test isFunction function', () => {
  test('isFunction is defined.', () => expect(isFunction).toBeDefined());
  test('isFunc is defined.', () => expect(isFunc).toBeDefined());

  test('isFunction returns true if object passed', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  ['string', null, 5, {}].forEach((val) => {
    test(`isFunction returns false if ${val} passed`, () => {
      expect(isFunction(val)).toBe(false);
    });
  });
});