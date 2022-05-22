let data = '2020-11-26';

export function dataResult() {
  return data.split('-').reverse().join('.')
}

console.log(dataResult());