const { isFunction, isFunc } = require('../../index');

describe('Test isFunction function', () => {
  test('isFunction is defined.', () => expect(isFunction).toBeDefined());
  test('isFunc is defined.', () => expect(isFunc).toBeDefined());

  [[() => {}], [() => {}, () => {}]].forEach((val) => {
    test(`isFunction returns true if ${val.length} function(s) passed as arguments`, () => {
      expect(isFunction(...val)).toBe(true);
    });
  });

  test('isFunction returns false if nothing passed', () => {
    expect(isFunction()).toBe(false);
  });

  ['string', null, 5, undefined, {}].forEach((val) => {
    test(`isFunction returns false if ${val} passed`, () => {
      expect(isFunction(val)).toBe(false);
    });
  });

  test('isFunction returns false if several functions and string passed', () => {
    expect(isFunction(() => {}, () => {}, 'string')).toBe(false);
  });
});
