import { changeColor } from './changeColorFunc.js';

const first = document.getElementById('text1');
const second = document.getElementById('text2');
const third = document.getElementById('text3');

first.addEventListener('click', changeColor());

second.addEventListener('click', changeColor());

third.addEventListener('click', changeColor());