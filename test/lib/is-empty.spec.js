const { isEmpty } = require('../../index');

describe('Test isEmpty function', () => {
  test('isEmpty is defined.', () => expect(isEmpty).toBeDefined());

  ['string', {}, 5, true, false].forEach((val) => {
    test(`isEmpty returns true if ${val} passed`, () => {
      expect(isEmpty(val)).toBe(false);
    });
  });

  test('isEmpty returns true if no argumetns passed', () => {
    expect(isEmpty()).toBe(true);
  });

  ['', null, undefined].forEach((val) => {
    test(`isEmpty returns false if ${val} passed`, () => {
      expect(isEmpty(val)).toBe(true);
    });
  });

  test('isEmpty returns false if some from the args are not empty', () => {
    expect(isEmpty(null, undefined, 'string')).toBe(false);
  });
});
