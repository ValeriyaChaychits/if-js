let user = 'John Doe';

console.log(user);

const student = 'Valeriya Chaychits';

console.log(student);

user = student;

// I used the "let" variable for the user, so the user value changed to the student value. If the "const" variable used for the user, it wouldn't work.

console.log(user);

console.log('---------');

let test = 1;

test += 1;

test += '1';

// When we sum a number and a string, a number is converted to a string type. And the result is a string.

console.log(test);

test -= 1;

// When we use subtraction, the data type is converted to a numeric type, which means 1 is subtracted from 21 and the result is 20.

console.log(test);

test = Boolean(test);

console.log(test);

console.log('---------');

let result = 1;
let array = [2, 3, 5, 8];

for (let i = 0; i < array.length; i++) {
  result = result * array[i];
}

console.log(result);

console.log('---------');

array = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 5 && array[i] < 10) {
    result = array[i];
    console.log(array[i]);
  }
}

console.log('---------');

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0 && array[i] > 0) {
    result = array[i];
    console.log(array[i]);
  }
}
