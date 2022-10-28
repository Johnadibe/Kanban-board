import getNumberCategory from '../modules/itemCounter.js';

describe('Category Counter', () => {
  test('Length of Array = 0', () => {
    const arr = [];
    expect(getNumberCategory(arr)).toBe(0);
  });

  test('Length of Array = 2', () => {
    const arr = [1, 2];
    expect(getNumberCategory(arr)).toBe(2);
  });
});