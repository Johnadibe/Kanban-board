import mealCounter from '../modules/itemCounter.js';

describe('Category Counter', () => {
    test('Length of Array = 0', () => {
        const arr = [];
        expect(mealCounter(arr)).toBe(0);
    });

    test('Length of Array = 2', () => {
        const arr = [1, 2];
        expect(mealCounter(arr)).toBe(2);
    });
});