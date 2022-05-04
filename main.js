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
    console.log(array[i]);
  }
}

console.log('---------');

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0 && array[i] > 0) {
    console.log(array[i]);
  }
}

console.log('---------');

function palindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;
}

console.log(palindrome('alla'));

const min = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
};

console.log(min(46, 6464));

const min2 = function (a, b) {
  return a < b ? a : b;
};

console.log(min2(46, 6464));

const max = function (a, b) {
  if (a < b) {
    return b;
  }
  return a;
};

console.log(max(46, 6464));

const max2 = function (a, b) {
  return a < b ? b : a;
};

console.log(max2(46, 6464));

const arr = [0, 5, 16, 24, 30, 40, 57, 70, 80, 100];

function argsFunction() {
  const result = arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = 'zero';
    } else if (arr[i] % 100 === 0) {
      arr[i] = arr[i] / 100 + 'zero' + 'zero';
    } else if (arr[i] % 10 === 0) {
      arr[i] = arr[i] / 10 + 'zero';
    }
  }
  return result;
}

console.log(argsFunction(arr));
