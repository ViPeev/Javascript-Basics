function clock() {
  for (let h = 0; h <= 23; h++) {
    for (let m = 0; m <= 59; m++) {
      console.log(`${h}:${m}`);
    }
  }
}

function multiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    for (let n = 1; n <= 10; n++) {
      console.log(`${i} * ${n} = ${i * n}`);
    }
  }
}

function combination(input) {
  let sum = Number(input[0]);
  let combinations = 0;
  for (let x1 = 0; x1 <= sum; x1++) {
    for (let x2 = 0; x2 <= sum; x2++) {
      for (let x3 = 0; x3 <= sum; x3++) {
        if (x1 + x2 + x3 === sum) {
          combinations++;
        }
      }
    }
  }
  console.log(combinations);
}

function magicNum(input) {
  let intervalStart = Number(input[0]);
  let intervalEnd = Number(input[1]);
  let magicNumber = Number(input[2]);
  a = Number(input[0]);
  b = Number(input[0]);
  let counter = 0;
  let sum;
  for (intervalStart; intervalStart <= intervalEnd; intervalStart++) {
    for (a; a <= intervalEnd; a++) {
      counter++;
      sum = a + b;
      if (sum === magicNumber) {
        return console.log(`Combination N:${counter} (${b} + ${a} = ${sum})`);
      }
    }
    b++;
    a = Number(input[0]);
  }
  console.log(`${counter} combinations - neither equals ${magicNumber}`);
}

function traveler(input) {
  let destination = "";
  let moneyCounter = 0;
  let neededMoney = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "End") {
      return;
    }
    if (!Number(input[i])) {
      destination = input[i];
      neededMoney = Number(input[i + 1]);
      i += 2;
    }
    moneyCounter += Number(input[i]);
    if (neededMoney <= moneyCounter) {
      console.log(`Going to ${destination}!`);
      moneyCounter = 0;
    }
  }
}

function building(input) {
  let floorIndex = Number(input[0]);
  let roomsPerFloorIndex = Number(input[1]);
  let roomString = "";
  let roomIndex = 0;
  for (let i = floorIndex; i > 0; i--) {
    for (let n = roomsPerFloorIndex; n > 0; n--) {
      if (i === floorIndex) {
        roomString += `L${i}${roomIndex} `;
        roomIndex++;
      } else if (i % 2 === 0) {
        roomString += `O${i}${roomIndex} `;
        roomIndex++;
      } else {
        roomString += `A${i}${roomIndex} `;
        roomIndex++;
      }
    }
    console.log(roomString);
    roomIndex = 0;
    roomString = "";
  }
}

function pyramid(input) {
  let num = Number(input[0]);
  let printCurrentLine = "";
  let counter = 1;
  isBigger = false;
  for (let rows = 1; rows <= num; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (counter > num) {
        isBigger = true;
        break;
      }
      printCurrentLine += counter + " ";
      counter++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}

function equalSums(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let odd = 0;
  let even = 0;
  let numberToString = "";
  let logString = "";
  for (let i = num1; i <= num2; i++) {
    numberToString = String(i);
    for (let n = 0; n < numberToString.length; n++) {
      if ((n + 1) % 2 === 0) {
        even += Number(numberToString[n]);
      } else {
        odd += Number(numberToString[n]);
      }
    }

    if (even === odd) {
      logString += `${numberToString} `;
    }
    even = 0;
    odd = 0;
  }
  console.log(logString);
}

function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index];
  let sumPrimeNumbers = 0;
  let sumNonPrimeNumbers = 0;
  index++;
  while (command !== "stop") {
    let num = Number(command);

    if (num < 0) {
      console.log(`Number is negative.`);
      command = input[index];
      index++;
      continue;
    }
    if (num === 1) {
      sumPrimeNumbers += num;
      command = input[index];
      index++;
      continue;
    }

    let isNonPrime = false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isNonPrime = true;
        break;
      }
    }

    if (isNonPrime) {
      sumNonPrimeNumbers += num;
    } else {
      sumPrimeNumbers += num;
    }

    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}

function train(input) {
  let jourieNumber = Number(input[0]);
  let presentationName = "";
  average = 0;
  averageFinal = 0;
  let counter = 0;
  for (let i = 1; i < input.length; i += jourieNumber + 1) {
    if (input[i] === "Finish") {
      break;
    }

    presentationName = input[i];
    counter++;

    for (let s = i + 1; s <= i + jourieNumber; s++) {
      average += Number(input[s]);
    }

    console.log(
      `${presentationName} - ${(average / jourieNumber).toFixed(2)}.`
    );
    averageFinal += average / jourieNumber;
    average = 0;
  }
  console.log(
    `Student's final assessment is ${(averageFinal / counter).toFixed(2)}.`
  );
}

function specialNumber(input) {
  let num = Number(input[0]);
  let numToString = "";
  let log1 = "";
  for (let i = 1111; i <= 9999; i++) {
    let counter = 0;
    numToString = String(i);
    for (let s = 0; s < numToString.length; s++) {
      let even = num / Number(numToString[s]);
      if (even === Math.ceil(even) && even > 0) {
        counter++;
      }
      if (Number(numToString[s]) === 0) {
        counter--;
      }
    }
    if (counter === 4) {
      log1 += `${String(i)} `;
    }
    counter = 0;
  }
  console.log(log1);
}

function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let standardTicketCount = 0;
  let kidTicketCount = 0;
  let studentTicketCount = 0;
  let ticketCounter = 0;

  while (command !== "Finish") {
    let name = command;
    let freeSpace = Number(input[index]);
    index++;

    let type = input[index];
    index++;
    let tempTicketCounter = 0;

    while (type !== "End") {
      switch (type) {
        case "student":
          studentTicketCount++;
          break;
        case "standard":
          standardTicketCount++;
          break;
        case "kid":
          kidTicketCount++;
          break;
      }
      tempTicketCounter++;

      if (tempTicketCounter >= freeSpace) {
        break;
      }
      type = input[index];
      index++;
    }

    let capacity = (tempTicketCounter / freeSpace) * 100;
    ticketCounter += tempTicketCounter;
    console.log(`${name} - ${capacity.toFixed(2)}% full.`);
    command = input[index];
    index++;
  }
  let studentP = (studentTicketCount / ticketCounter) * 100;
  let kidP = (kidTicketCount / ticketCounter) * 100;
  let standardP = (standardTicketCount / ticketCounter) * 100;
  console.log(`Total tickets: ${ticketCounter}`);
  console.log(`${studentP.toFixed(2)}% student tickets.`);
  console.log(`${standardP.toFixed(2)}% standard tickets.`);
  console.log(`${kidP.toFixed(2)}% kids tickets.`);
}
