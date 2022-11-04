//TODO Нові дражнилки

const randomNouns = ["вихованіть", "кмітливість", "харизма", "зовнішність"];
const randomVerbs = ["викликає", "пробуджує", "навіює"];
const randomWords = ["повагу", "співчуття", "гордість", "шану", "заздрість"];
const randomNoun = randomNouns[Math.floor(Math.random() * 4)];
const randomVerb = randomVerbs[Math.floor(Math.random() * 3)];
const randomWord = randomWords[Math.floor(Math.random() * 5)];
const randomInsult =
  "Твоя " + randomNoun + " " + randomVerb + " " + randomWord + "!!!";
console.log(randomInsult);

//TODO Витончені дражнилки

const randomBodyParts = ["голова", "рука", "нога"];
const randomAdjectives = ["крива", "корява", "волохата"];
const randomAnimalParts = ["хвіст", "лапа", "морда"];
const randomAnimals = ["мурахоїда", "лося", "дикобраза", "віслюка", "мавпи"];
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
const randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * 3)];
const randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];
const randomResult =
  "У тебe " +
  randomBodyPart +
  " ще більш " +
  randomAdjective +
  ", ніж " +
  randomAnimalPart +
  " у " +
  randomAnimal +
  "!";
console.log(randomResult);

//TODO Оператор + чи join?

const randomNs = ["вихованіть", "кмітливість", "харизма", "зовнішність"];
const randomVs = ["викликає", "пробуджує", "навіює"];
const randomWs = ["повагу", "співчуття", "гордість", "шану", "заздрість"];
const randomN = randomNs[Math.floor(Math.random() * 4)];
const randomV = randomVs[Math.floor(Math.random() * 3)];
const randomW = randomWs[Math.floor(Math.random() * 5)];
const randomIns = ["Твоя", randomN, randomV, randomW, "!!!"];
console.log(randomIns.join(" "));

//TODO З'єднання чисел

let numbers = [3, 2, 1];
let text = numbers.join(" більше, ніж ");
console.log(text);

//TODO Підрахунок очок

const scores = {
  Kolian: 0,
  Vasian: 0,
  Tolian: 0,
};

scores["Kolian"] += 1;
scores["Vasian"] += 1;
scores["Tolian"] += 1;
console.log(scores);

//TODO Углиб об'єктів і масивів

const myCrazyObject = {
  name: "Безглуздий об'єкт",
  "some array": [7, 9, { purpose: "плутанина", number: 123 }, 3.3],
  "random animal": "Бананова акула",
};

console.log(myCrazyObject["some array"][2].number);
