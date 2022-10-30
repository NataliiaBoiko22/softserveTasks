// 1. Навпаки
let yourNumber = +prompt("Введіть трьохзначне число");
let num1 = Math.floor(yourNumber / 100);
let num3 = yourNumber % 10;
let num2 = (yourNumber - num1 * 100 - num3) / 10;
let yourNumberReverse = String(num3) + String(num2) + String(num1);
alert(`Ваше число задом наперед ${yourNumberReverse}`);

// 2. Температурний помічник.
const d_s = prompt("Введіть температуру повітря в °С");
const deg = Number(d_s);

result = Math.floor(deg * 1.8 + 32);

alert(`Температура повітря складає ${result} F`);
//3. Конвертер кольору.
const red = prompt("Введіть насиченість червоного кольору");
const green = prompt("Введіть насиченість зеленого кольору");
const blue = prompt("Введіть насиченість синього кольору");

const r = parseInt(red, 16);
const g = parseInt(green, 16);
const b = parseInt(blue, 16);

const color = `rgb(${r},${g},${b})`;

prompt(color);

document.body.style.backgroundColor = color;
