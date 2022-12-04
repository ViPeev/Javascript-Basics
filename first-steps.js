function hello() {
  console.log("Hello SoftUni");
}

function nums1To10() {
  let n = 0;
  while (n < 10) {
    console.log(++n);
  }
}

function area(num) {
  console.log(Math.pow(num, 2));
}

function converter(inches) {
  let cm = Number(inches) * 2.54;
  console.log(cm);
}

function greetings(name) {
  console.log(`Hello, ${name}!`);
}

function concatenateData(input) {
  console.log(
    `You are ${input[0]} ${input[1]}, a ${input[2]}-years old person from ${input[3]}.`
  );
}

function project(input) {
  let hours = input[1] * 3;
  console.log(
    ` The architect ${input[0]} will need ${hours} hours to complete ${input[1]} project/s.`
  );
}

function petShop(input) {
  let dogFood = input[0] * 2.5;
  let catFood = input[1] * 4;
  let expenses = dogFood + catFood;
  console.log(`${expenses} lv`);
}

function yardGreening(input) {
  const metersToGreen = Number(input[0]) * 7.61;
  const discount = metersToGreen * 0.18;
  const total = metersToGreen - discount;
  console.log(`The final price is: ${total} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

function currencyConverter(USD) {
  let bgn = Number(USD) * 1.79549;
  console.log(bgn);
}

function radiansToDegreeConverter(radians) {
  let degrees = (Number(radians) * 180) / Math.PI;
  console.log(degrees);
}

function depositCalculator(input) {
  let increase = Number(input[0]) * (Number(input[2]) / 100);
  let monthlyIncrease = increase / 12;
  let owedMoney = Number(input[0]) + Number(input[1]) * monthlyIncrease;
  console.log(owedMoney);
}

function bookPagesPerDay(input) {
  let daysNeeded = Number(input[0]) / Number(input[1]) / Number(input[2]);
  console.log(daysNeeded);
}

function supplies(input) {
  let wholePrice =
    Number(input[0]) * 5.8 + Number(input[1]) * 7.2 + Number(input[2]) * 1.2;
  let discountedPrice = wholePrice - wholePrice * (Number(input[3]) / 100);
  console.log(discountedPrice);
}

function repainting(input) {
  let neededNylon = (Number(input[0]) + 2) * 1.5;
  let neededPaint = Number(input[1]) * 1.1 * 14.5;
  let neededThinner = Number(input[2]) * 5;
  let workExpenses =
    (0.4 + neededNylon + neededPaint + neededThinner) * 0.3 * Number(input[3]);
  let total = 0.4 + neededNylon + neededPaint + neededThinner + workExpenses;
  console.log(total);
}

function foodDelivery(input) {
    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.4;
    let vegetarian = Number(input[2]) * 8.15;
    let wholeOrder = chicken + vegetarian + fish;
    let dessert = wholeOrder / 5;
    let total = wholeOrder + dessert + 2.5;
    console.log(total);
}

function basketBallExpenses(input) {
    let shoePrice = Number(input[0]) * 0.6;
    let clothesPrice = shoePrice * 0.8;
    let ballPrice = clothesPrice /4;
    let accesories = ballPrice /5;
    let total = Number(input[0]) + shoePrice + clothesPrice + ballPrice + accesories;
    console.log(total);
}

function aquarium(input) {
    let capacity = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let litres = capacity / 1000;
    let neededWater = litres * (1 - (Number(input[3])/100));
    console.log(neededWater)
}