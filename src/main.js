import { changeColor } from './changeColorFunc.js';

const first = document.getElementById('text1');
const second = document.getElementById('text2');
const third = document.getElementById('text3');

first.addEventListener('click', changeColor());

second.addEventListener('click', changeColor());

third.addEventListener('click', changeColor());

function dataFunc(match, year, month, day) {
  return [day, month, year].join('.');
}

const data = '2020-11-26';

const dataChange = () => {
  return data.replace(/(\d*)-(\d*)-(\d*)/, dataFunc);
};

console.log(dataChange());




const dataArr = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function funcSearch(enteringWord) {
  const result = []

  dataArr.forEach((item) => {
    if (
      item.country.includes(enteringWord) ||
      item.city.includes(enteringWord) ||
      item.hotel.includes(enteringWord)
    ) {
      result.push(`${item.country} , ${item.city} , ${item.hotel}`);
    }
  });
  return result;
}

console.log(funcSearch('Rotterdam'));