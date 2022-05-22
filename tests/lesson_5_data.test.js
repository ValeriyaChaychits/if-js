import { dataResult } from '../src/lesson_5_data.js';

test('dataChange', () => {
  expect(dataResult()).toMatch(/(\d{2}).(\d{2}).(\d{4})/)
})
