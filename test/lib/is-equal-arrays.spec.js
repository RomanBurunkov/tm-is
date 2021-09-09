const { isEqualArrays, isEqArr, isEqualArr } = require('../../index');

describe('Test isEqualArrays function', () => {
  test('isEqualArrays is defined.', () => expect(isEqualArrays).toBeDefined());
  test('isEqArr is defined.', () => expect(isEqArr).toBeDefined());
  test('isEqArr is equal isEqualArrays.', () => expect(isEqArr).toBe(isEqualArrays));
  test('isEqualArr is defined.', () => expect(isEqualArr).toBeDefined());
  test('isEqualArr is equal isEqualArrays.', () => expect(isEqualArr).toBe(isEqualArrays));

  test('isEqualArrays returns false if nothing passed', () => {
    expect(isEqualArrays()).toBe(false);
  });

  test('isEqualArrays returns false if only one arg passed', () => {
    expect(isEqualArrays([])).toBe(false);
  });

  test('isEqualArrays returns false if one or mere from the passed args are not an array', () => {
    expect(isEqualArrays([1], 2)).toBe(false);
  });

  test('isEqualArrays returns false if passed arrays have differrent length', () => {
    expect(isEqualArrays([1], [1, 2])).toBe(false);
  });

  test('isEqualArrays returns false if passed two not equal arrays', () => {
    expect(isEqualArrays([1, 2], [1, 3])).toBe(false);
  });

  test('isEqualArrays returns true if several empty arrays passed', () => {
    expect(isEqualArrays([], [], [])).toBe(true);
  });

  test('isEqualArrays returns true if two equal arrays passed', () => {
    expect(isEqualArrays([1, 2], [1, 2])).toBe(true);
  });

  test('isEqualArrays returns true if several equal arrays passed', () => {
    expect(isEqualArrays([1, 2], [1, 2], [1, 2])).toBe(true);
  });
});
