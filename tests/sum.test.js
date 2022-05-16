import { sum } from '../src/sumFunc.js';

test('Sum', () => {
  expect(sum(6)(5)).toBe(11);
});
