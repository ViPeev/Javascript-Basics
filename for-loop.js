function iterate() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

function iterate2(input) {
  let i = Number(input[0]);
  for (; i >= 1; i--) {
    console.log(i);
  }
}

function iterate3(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}

function evenPowerOfTwo(input) {
  let n = Number(input[0]);
  for (let i = 0; i <= n; i += 2) {
    console.log(2 ** i);
  }
}

function stringy(input) {
  let word = input[0];
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
}

function vowelsSum(input) {
  let word = input[0].toLowerCase();
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

function sumOfNumbers(input) {
  let inputNumber = input[0];
  let counter = 0;
  for (let i = 0; i < inputNumber.length; i++) {
    counter += Number(inputNumber[i]);
  }
  console.log(`The sum of the digits is:${counter}`);
}

function divisibleByNine(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let delimiters = [];
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      sum += i;
      delimiters.push(i);
    }
  }
  console.log(`The sum: ${sum}`);
  delimiters.forEach((d) => console.log(d));
}

function endingInSeven() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}

function multiplicationTable(input) {
  let num = Number(input[0]);
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
  }
}

function histogram(input) {
  let n = Number(input[0]);
  let below200 = 0;
  let below400 = 0;
  let below600 = 0;
  let below800 = 0;
  let below1000 = 0;
  for (let i = 1; i < input.length; i++) {
    if (Number(input[i]) < 200) {
      below200++;
    } else if (Number(input[i]) < 400) {
      below400++;
    } else if (Number(input[i]) < 600) {
      below600++;
    } else if (Number(input[i]) < 800) {
      below800++;
    } else if (Number(input[i]) <= 1000) {
      below1000++;
    }
  }
  console.log(`${((below200 / (input.length - 1)) * 100).toFixed(2)}%`);
  console.log(`${((below400 / (input.length - 1)) * 100).toFixed(2)}%`);
  console.log(`${((below600 / (input.length - 1)) * 100).toFixed(2)}%`);
  console.log(`${((below800 / (input.length - 1)) * 100).toFixed(2)}%`);
  console.log(`${((below1000 / (input.length - 1)) * 100).toFixed(2)}%`);
}

function lilly(input) {
  let age = Number(input[0]);
  let washingMachine = Number(input[1]);
  let toyPrice = Number(input[2]);
  let toys = 0;
  let savings = 0;
  let giftMoney = 10;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      savings += giftMoney;
      giftMoney += 10;
      savings--;
    } else {
      toys++;
    }
  }
  savings += toys * toyPrice;
  if (savings >= washingMachine) {
    console.log(`Yes! ${(savings - washingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachine - savings).toFixed(2)}`);
  }
}

function salaryCalc(input) {
  let salary = Number(input[1]);
  let sanctions = 0;
  for (let i = 2; i < input.length; i++) {
    if (input[i] === "Facebook") {
      sanctions += 150;
    } else if (input[i] === "Instagram") {
      sanctions += 100;
    } else if (input[i] === "Reddit") {
      sanctions += 50;
    }
    if (salary <= sanctions) {
      return console.log("You have lost your salary.");
    }
  }
  console.log(parseInt(salary - sanctions));
}

function oscar(input) {
  let actorName = input[0];
  let points = Number(input[1]);
  let pointsNeeded = 1250.5;
  for (let i = 3; i <= input.length; i++) {
    if (i % 2 === 0) {
      points += (Number(input[i]) * Number(input[i - 1].length)) / 2;
    }
    if (points > pointsNeeded) {
      return console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${Number(
          points
        ).toFixed(1)}!`
      );
    }
  }
  console.log(
    `Sorry, ${actorName} you need ${Number(pointsNeeded - points).toFixed(
      1
    )} more!`
  );
}

function trekkingMania(input) {
  let musala = 0;
  let montBlanc = 0;
  let kilimanjaro = 0;
  let ktwo = 0;
  let everest = 0;
  let sum = 0;
  for (let i = 1; i <= input.length - 1; i++) {
    if (Number(input[i]) < 6) {
      musala += Number(input[i]);
    } else if (Number(input[i]) < 13) {
      montBlanc += Number(input[i]);
    } else if (Number(input[i]) < 26) {
      kilimanjaro += Number(input[i]);
    } else if (Number(input[i]) < 41) {
      ktwo += Number(input[i]);
    } else {
      everest += Number(input[i]);
    }
    sum += Number(input[i]);
  }
  const output = `${((musala / sum) * 100).toFixed(2)}%
${((montBlanc / sum) * 100).toFixed(2)}%
${((kilimanjaro / sum) * 100).toFixed(2)}%
${((ktwo / sum) * 100).toFixed(2)}%
${((everest / sum) * 100).toFixed(2)}%`;
  console.log(output);
}

function tennis(input) {
  let compNum = Number(input[0]);
  let startPoints = Number(input[1]);
  let addedPoints = 0;
  let wins = 0;

  for (i = 2; i < input.length; i++) {
    if (input[i] === "W") {
      addedPoints += 2000;
      wins++;
    } else if (input[i] === "F") {
      addedPoints += 1200;
    } else {
      addedPoints += 720;
    }
  }
  console.log(`Final points: ${addedPoints + startPoints}`);
  console.log(`Average points: ${Math.floor(addedPoints / compNum)}`);
  console.log(`${((wins / compNum) * 100).toFixed(2)}%`);
}
