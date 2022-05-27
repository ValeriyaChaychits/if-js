import { funcHotelsList, countryCityFunc } from '../src/lesson_6_arrays.js';

test('searching', () => {
  const searchWord = 'Adagio';
  expect(funcHotelsList(searchWord)).toStrictEqual(['UK , Edinburgh , Adagio Aparthotel'])
});

test('comparison of countries and cities', () => {
  expect(countryCityFunc).not.toBe(undefined)
})