function dayOfTheWeek(input) {
  let dayArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Error",
  ];
  let day = Number(input[0]) - 1;
  if (day > 7 || day < 0) {
    day = 7;
  }
  console.log(dayArray[day]);
}

function dayOfWeek(input) {
  const day = input[0];
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Working day");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log(`Error`);
  }
}

function animalType(input) {
  const animal = input[0];
  switch (animal) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
  }
}

function personalTitles(input) {
  let age = Number(input[0]);
  let sex = input[1];
  if (age < 16 && sex === "m") {
    console.log("Master");
  } else if (age >= 16 && sex === "m") {
    console.log("Mr.");
  } else if (age < 16 && sex === "f") {
    console.log("Miss");
  } else if (age >= 16 && sex === "f") {
    console.log("Ms.");
  }
}

function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let amount = Number(input[2]);
  let coffeePrice;
  let waterPrice;
  let beerPrice;
  let sweetsPrice;
  let peanutsPrice;
  let varProduct;
  if (city === "Sofia") {
    coffeePrice = 0.5;
    waterPrice = 0.8;
    beerPrice = 1.2;
    sweetsPrice = 1.45;
    peanutsPrice = 1.6;
  } else if (city === "Plovdiv") {
    coffeePrice = 0.4;
    waterPrice = 0.7;
    beerPrice = 1.15;
    sweetsPrice = 1.3;
    peanutsPrice = 1.5;
  } else if (city === "Varna") {
    coffeePrice = 0.45;
    waterPrice = 0.7;
    beerPrice = 1.1;
    sweetsPrice = 1.35;
    peanutsPrice = 1.55;
  }
  if (product === "coffee") {
    varProduct = coffeePrice;
  } else if (product === "water") {
    varProduct = waterPrice;
  } else if (product === "beer") {
    varProduct = beerPrice;
  } else if (product === "sweets") {
    varProduct = sweetsPrice;
  } else if (product === "peanuts") {
    varProduct = peanutsPrice;
  }
  let bill = varProduct * amount;
  console.log(bill);
}

function numberInRange(input) {
  let numberInput = Number(input[0]);
  if (numberInput === 0 || numberInput < -100 || numberInput > 100) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}

function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];
  let workTime = "";
  if (hour >= 10 && hour < 18 && !(day === "Sunday")) {
    workTime = "open";
  } else {
    workTime = "closed";
  }
  console.log(workTime);
}

function cinemaTicket(input) {
  let day = input[0];
  let price;
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Friday":
      price = 12;
      break;
    case "Wednesday":
    case "Thursday":
      price = 14;
      break;
    default:
      price = 16;
      break;
  }
  console.log(price);
}

function fruitOrVegetable(input) {
  let product = input[0];
  let log1 = "";
  if (
    product === "banana" ||
    product === "kiwi" ||
    product === "apple" ||
    product === "cherry" ||
    product === "lemon" ||
    product === "grapes"
  ) {
    log1 = "fruit";
  } else if (
    product === "tomato" ||
    product === "cucumber" ||
    product === "pepper" ||
    product === "carrot"
  ) {
    log1 = "vegetable";
  } else {
    log1 = "unknown";
  }
  console.log(log1);
}

function invalidNumber(input) {
  let validNumber = Number(input[0]);
  if ((validNumber >= 100 && validNumber <= 200) || validNumber === 0) {
    validNumber = Number(input[0]);
  } else {
    console.log("invalid");
  }
}

function fruitOrVegetable(input) {
  let fruit = input[0];
  let day = input[1];
  let amount = Number(input[2]);
  let varFruit;
  let banana;
  let apple;
  let orange;
  let grapefruit;
  let kiwi;
  let pineapple;
  let grapes;

  if (day === "Saturday" || day === "Sunday") {
    banana = 2.7;
    apple = 1.25;
    orange = 0.9;
    grapefruit = 1.6;
    kiwi = 3.0;
    pineapple = 5.6;
    grapes = 4.2;
  } else if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    banana = 2.5;
    apple = 1.2;
    orange = 0.85;
    grapefruit = 1.45;
    kiwi = 2.7;
    pineapple = 5.5;
    grapes = 3.85;
  } else {
    banana = 0;
    apple = 0;
    orange = 0;
    grapefruit = 0;
    kiwi = 0;
    pineapple = 0;
    grapes = 0;
  }

  switch (fruit) {
    case "banana":
      varFruit = banana;
      break;
    case "apple":
      varFruit = apple;
      break;
    case "orange":
      varFruit = orange;
      break;
    case "grapefruit":
      varFruit = grapefruit;
      break;
    case "kiwi":
      varFruit = kiwi;
      break;
    case "pineapple":
      varFruit = pineapple;
      break;
    case "grapes":
      varFruit = grapes;
      break;
    default:
      varFruit = 0;
      break;
  }
  let price = (varFruit * amount).toFixed(2);
  if (price == 0.0) {
    console.log("error");
  } else {
    console.log(price);
  }
}

function commissions(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let commissionPercent;
  let comm1;
  let comm2;
  let comm3;
  let comm4;

  if (city === "Sofia") {
    comm1 = 0.05;
    comm2 = 0.07;
    comm3 = 0.08;
    comm4 = 0.12;
  } else if (city === "Varna") {
    comm1 = 0.045;
    comm2 = 0.075;
    comm3 = 0.1;
    comm4 = 0.13;
  } else if (city === "Plovdiv") {
    comm1 = 0.055;
    comm2 = 0.08;
    comm3 = 0.12;
    comm4 = 0.145;
  } else {
    comm1 = 0;
    comm2 = 0;
    comm3 = 0;
    comm4 = 0;
  }

  if (sales <= 500 && sales >= 0) {
    commissionPercent = comm1;
  } else if (sales > 500 && sales <= 1000) {
    commissionPercent = comm2;
  } else if (sales > 1000 && sales <= 10000) {
    commissionPercent = comm3;
  } else if (sales > 10000) {
    commissionPercent = comm4;
  } else {
    commissionPercent = 0;
  }
  let commission = (sales * commissionPercent).toFixed(2);
  if (commission == 0) {
    console.log("error");
  } else {
    console.log(commission);
  }
}

function cinema(input) {
  let projectionType = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let price;
  if (projectionType === "Premiere") {
    price = 12;
  } else if (projectionType === "Normal") {
    price = 7.5;
  } else if (projectionType === "Discount") {
    price = 5.0;
  }
  let total = price * rows * columns;
  console.log(Number(total).toFixed(2) + " leva");
}

function summerClothing(input) {
  let degrees = Number(input[0]);
  let dayTime = input[1];
  outfit = "";
  shoes = "";
  if (
    dayTime === "Evening" ||
    (dayTime === "Morning" && degrees >= 18 && degrees <= 24) ||
    (dayTime === "Afternoon" && degrees >= 10 && degrees <= 18)
  ) {
    outfit = "Shirt";
    shoes = "Moccasins";
  } else if (
    (dayTime === "Morning" && degrees >= 25) ||
    (dayTime === "Afternoon" && degrees >= 18 && degrees <= 24)
  ) {
    outfit = "T-Shirt";
    shoes = "Sandals";
  } else if (dayTime === "Afternoon" && degrees >= 25) {
    outfit = "Swim Suit";
    shoes = "Barefoot";
  } else {
    outfit = "Sweatshirt";
    shoes = "Sneakers";
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

function newHouse(input) {
  let flowerType = input[0];
  let flowerNumber = Number(input[1]);
  let budget = Number(input[2]);
  let price;
  switch (flowerType) {
    case "Roses":
      price = 5;
      break;
    case "Dahlias":
      price = 3.8;
      break;
    case "Tulips":
      price = 2.8;
      break;
    case "Narcissus":
      price = 3;
      break;
    case "Gladiolus":
      price = 2.5;
      break;
  }
  let total = price * flowerNumber;
  if (flowerType === "Roses" && flowerNumber > 80) {
    total *= 0.9;
  } else if (
    (flowerType === "Dahlias" && flowerNumber > 90) ||
    (flowerType === "Tulips" && flowerNumber > 80) ||
    (flowerType === "Narcissus" && flowerNumber < 120)
  ) {
    total *= 0.85;
  } else if (flowerType === "Gladiolus" && flowerNumber < 80) {
    total *= 1.2;
  }

  if (budget >= total) {
    console.log(
      `Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${Number(
        budget - total
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${Number(total - budget).toFixed(
        2
      )} leva more.`
    );
  }
}

function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherman = Number(input[2]);
  let price;

  if (season === "Spring") {
    price = 3000;
  } else if (season === "Winter") {
    price = 2600;
  } else {
    price = 4200;
  }

  if (fisherman <= 6) {
    price *= 0.9;
  } else if (fisherman >= 7 && fisherman <= 11) {
    price *= 0.85;
  } else if (fisherman > 12) {
    price *= 0.75;
  }

  if (fisherman % 2 === 0 && !(season === "Autumn")) {
    price *= 0.95;
  }

  if (budget >= price) {
    console.log(
      `Yes! You have ${Number(budget - price).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${Number(price - budget).toFixed(2)} leva.`
    );
  }
}

function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = "";
  let hotel = "";
  let price;

  if (budget <= 100) {
    destination = "Bulgaria";
  } else if (budget <= 1000) {
    destination = "Balkans";
  } else {
    destination = "Europe";
  }

  if (destination === "Bulgaria" && season === "summer") {
    price = budget * 0.3;
    hotel = "Camp";
  } else if (destination === "Bulgaria" && season === "winter") {
    price = budget * 0.7;
    hotel = "Hotel";
  } else if (destination === "Balkans" && season === "summer") {
    price = budget * 0.4;
    hotel = "Camp";
  } else if (destination === "Balkans" && season === "winter") {
    price = budget * 0.8;
    hotel = "Hotel";
  } else {
    price = budget * 0.9;
    hotel = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${hotel} - ${Number(price).toFixed(2)}`);
}

function calculator(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let operation = input[2];
  let result;
  let isEven;
  if (num2 === 0) {
    console.log(`Cannot divide ${num1} by zero`);
  } else if (operation === "+") {
    result = num1 + num2;
    if (result % 2 === 0) {
      isEven = "even";
    } else {
      isEven = "odd";
    }
    console.log(`${num1} ${operation} ${num2} = ${result} - ${isEven}`);
  } else if (operation === "-") {
    result = num1 - num2;
    if (result % 2 === 0) {
      isEven = "even";
    } else {
      isEven = "odd";
    }
    console.log(`${num1} ${operation} ${num2} = ${result} - ${isEven}`);
  } else if (operation === "*") {
    result = num1 * num2;
    if (result % 2 === 0) {
      isEven = "even";
    } else {
      isEven = "odd";
    }
    console.log(`${num1} ${operation} ${num2} = ${result} - ${isEven}`);
  } else if (operation === "/") {
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${Number(result).toFixed(2)}`);
  } else if (operation === "%") {
    result = num1 % num2;
    console.log(`${num1} % ${num2} = ${result}`);
  }
}

function hotel(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let studio;
  let apartment;

  if (month === "May" || month === "October") {
    studio = 50;
    apartment = 65;
  } else if (month === "June" || month === "September") {
    studio = 75.2;
    apartment = 68.7;
  } else {
    studio = 76;
    apartment = 77;
  }

  if ((month === "June" || month === "September") && nights > 14) {
    studio *= 0.8;
    apartment *= 0.9;
  } else if (month === "May" || month === "October") {
    if (nights > 14) {
      apartment *= 0.9;
      studio *= 0.7;
    } else if (nights > 7) {
      studio *= 0.95;
    }
  } else if (nights > 14) {
    apartment *= 0.9;
  }

  let studioTotal = studio * nights;
  let apartmentTotal = apartment * nights;

  console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
  console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}

function onTimeForTheExam(input) {
  let hoursExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hoursArrive = Number(input[2]);
  let minArrive = Number(input[3]);

  let timeExam = hoursExam * 60 + minExam;
  let timeArrive = hoursArrive * 60 + minArrive;
  if (timeExam < timeArrive) {
    console.log("Late");
    let diff = Math.abs(timeArrive - timeExam);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (h > 0) {
      if (m < 10) {
        console.log(`${h}:0${m} hours after the start`);
      } else {
        console.log(`${h}:${m} hours after the start`);
      }
    } else {
      console.log(`${m} minutes after the start`);
    }
  } else if (timeArrive <= timeExam && Math.abs(timeExam - timeArrive) <= 30) {
    console.log("On time");
    let diff = Math.abs(timeArrive - timeExam);
    if (diff > 0) {
      console.log(`${diff} minutes before the start`);
    }
  } else {
    console.log("Early");
    let diff = Math.abs(timeArrive - timeExam);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (h > 0) {
      if (m < 10) {
        console.log(`${h}:0${m} hours before the start`);
      } else {
        console.log(`${h}:${m} hours before the start`);
      }
    } else {
      console.log(`${m} minutes before the start`);
    }
  }
}

function skiTrip(input) {
  let singleRoom = 18;
  let apartment = 25;
  let president = 35;
  let days = Number(input[0]);
  let roomType = input[1];
  let grade = input[2];
  let nights = days - 1;
  let room;

  if (nights < 10) {
    apartment *= 0.7;
    president *= 0.9;
  } else if (nights >= 10 && nights < 15) {
    apartment *= 0.65;
    president *= 0.85;
  } else {
    apartment *= 0.5;
    president *= 0.8;
  }

  if (roomType === "room for one person") {
    room = singleRoom;
  } else if (roomType === "apartment") {
    room = apartment;
  } else {
    room = president;
  }

  if (grade === "positive") {
    console.log((room * nights * 1.25).toFixed(2));
  } else {
    console.log((room * nights * 0.9).toFixed(2));
  }
}
