const { isEmpty } = require('../../index');

describe('Test isEmpty function', () => {
  test('isEmpty is defined.', () => expect(isEmpty).toBeDefined());

  ['string', {}, 5, true, false].forEach((val) => {
    test(`isEmpty returns true if ${val} passed`, () => {
      expect(isEmpty(val)).toBe(false);
    });
  });

  ['', null, undefined].forEach((val) => {
    test(`isEmpty returns false if ${val} passed`, () => {
      expect(isEmpty(val)).toBe(true);
    });
  });
});
