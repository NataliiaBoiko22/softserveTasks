
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
