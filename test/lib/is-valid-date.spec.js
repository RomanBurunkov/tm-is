const { isValidDate, isValDate, isDate } = require('../../index');

describe('Test isValidDate function', () => {
  test('isDate is defined.', () => expect(isDate).toBeDefined());
  test('isValDate is defined.', () => expect(isValDate).toBeDefined());
  test('isValidDate is defined.', () => expect(isValidDate).toBeDefined());

  test('isValidDate returns false if nothing passed', () => {
    expect(isValidDate()).toBe(false);
  });

  ['', null, 'qwerty', undefined].forEach((val) => {
    test(`isValidDate returns false if ${val} passed`, () => {
      expect(isValidDate(val)).toBe(false);
    });
  });

  test('isValidDate returns false if one of the arguments is  not a valid date', () => {
    expect(isValidDate(1000, 'qwerty')).toBe(false);
  });

  test('isValidDate returns true if number passed', () => {
    expect(isValidDate(100000)).toBe(true);
  });

  test('isValidDate returns true if date passed', () => {
    expect(isValidDate('2024-12-28')).toBe(true);
  });
});
