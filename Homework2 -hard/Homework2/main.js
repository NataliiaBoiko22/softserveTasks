// const red = prompt("Введіть насиченість червоного кольору [16, 255]", 100);
// const green = prompt("Введіть насиченість зеленого кольору [16, 255]", 100);
// const blue = prompt("Введіть насиченість синього кольору [16, 255]", 100);

// const r = Number(red).toString(16);
// const g = Number(green).toString(16);
// const b = Number(blue).toString(16);

// const color = `#${r}${g}${b}`;

// console.log(color);

// document.body.style.backgroundColor = color;

// 1. Об'єм
const h_t = prompt("Введіть висоту циліндра");
const d_r = prompt("Введіть діаметр основи циліндра");

const h = Number(h_t);
const d = Number(d_r);
const pi = 3.141592;

result = (pi / 4) * (d ^ 2) * h;

alert(`Об'єм циліндра складає ${result}`);
//2. Привітання

const yourName = prompt("Введіть своє ім'я");
const greeting = `Привіт, ${yourName}`;
alert(greeting);

//3. Периметр квадрата
const l_t = prompt("Введіть сторону квадрата");

const l = Number(l_t);

result = l * 4;

alert(`Периметр квадрата складає ${result}`);

// 4. Швидкість
const d_e = prompt("Введіть віжстань між двома містами");
const s_d = prompt("Введіть час ");

const dist = Number(d_e);
const speed = Number(s_d);

result = dist / speed;

alert(`Вам необхідно рухатись зі швидкістю ${result}`);

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

result = deg * 1.8 + 32;

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
