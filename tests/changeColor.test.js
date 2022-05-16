import { changeColor } from '../src/changeColorFunc.js';

test('color', () => {
  expect(changeColor()).not.toBe(undefined);
});
