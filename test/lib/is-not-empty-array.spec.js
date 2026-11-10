const { isNotEmptyArray, isNotEmptyArr } = require('../../index');

describe('Test isNotEmptyArray function', () => {
  test('isNotEmptyArray is defined', () => expect(isNotEmptyArray).toBeDefined());
  test('isNotEmptyArr is equal to isNotEmptyArray', () => {
    expect(isNotEmptyArr).toBe(isNotEmptyArray);
  });

  test('returns false if no arguments are passed', () => {
    expect(isNotEmptyArray()).toBe(false);
  });

  test('returns true for one or more non-empty arrays', () => {
    expect(isNotEmptyArray([1])).toBe(true);
    expect(isNotEmptyArray([1], [2, 3])).toBe(true);
  });

  test('returns false if any array is empty', () => {
    expect(isNotEmptyArray([])).toBe(false);
    expect(isNotEmptyArray([1], [])).toBe(false);
    expect(isNotEmptyArray([], [1])).toBe(false);
  });

  test('returns false for non-arrays, including array-like objects', () => {
    ['abc', null, undefined, 0, { 0: 'a', length: 1 }].forEach((value) => {
      expect(isNotEmptyArray(value)).toBe(false);
      expect(isNotEmptyArray([1], value)).toBe(false);
    });
  });

  test('checks length rather than array contents', () => {
    expect(isNotEmptyArray([undefined])).toBe(true);
    expect(isNotEmptyArray(new Array(1))).toBe(true);
  });
});
