import { funcSearch } from '../src/lesson_5_searching.js'

test('searching', () => {
  const enteringWord = 'Bali';
  expect(funcSearch(enteringWord)).toStrictEqual(['Indonesia , Bali , Ubud Bali Resort&SPA'])
})