function arrayStop(input) {
  let i = 0;
  while (i < input.length) {
    if (input[i] === "Stop") {
      return;
    }
    console.log(input[i]);
    i++;
  }
}

function password(input) {
  let username = input[0];
  let password = input[1];
  let data = input[2];
  let index = 3;
  while (data !== password) {
    data = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}

function sumNumbers(input) {
  let num = Number(input[0]);
  let sum = 0;
  let index = 1;
  while (sum < num) {
    sum += Number(input[index]);
    index++;
  }
  console.log(sum);
}

function sumNumbers(input) {
  let num = Number(input[0]);
  let sum = 1;
  while (sum <= num) {
    console.log(sum);
    sum = sum * 2 + 1;
  }
}

function accountBalance(input) {
  let index = 0;
  let total = 0;
  while (index < input.length) {
    if (Number(input[index]) < 0) {
      console.log("Invalid operation!");
      break;
    } else {
      console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
      total += Number(input[index]);
    }
    index++;

    if (input[index] === "NoMoreMoney") {
      return console.log(`Total: ${total.toFixed(2)}`);
    }
  }
  console.log(`Total: ${total.toFixed(2)}`);
}

function mathMax(input) {
  let empty = [];
  let counter = 0;
  while (counter < input.length) {
    empty.push(Number(input[counter]));
    counter++;
    if (input[counter] === "Stop") {
      break;
    }
  }
  console.log(Math.max(...empty));
}

function mathMin(input) {
  let empty = [];
  let counter = 0;
  while (counter < input.length) {
    empty.push(Number(input[counter]));
    counter++;
    if (input[counter] === "Stop") {
      break;
    }
  }
  console.log(Math.min(...empty));
}

function graduation(input) {
  let name = input[0];
  let sum = 0;
  let index = 1;
  let lowGrades = [];
  while (index < input.length) {
    if (lowGrades.length > 1) {
      return console.log(`${name} has been excluded at ${index} grade`);
    }
    if (Number(input[index]) < 4) {
      lowGrades.push(Number(input[index]));
      index--;
    } else {
      sum += Number(input[index]);
    }
    index++;
  }
  console.log(
    `${name} graduated. Average grade: ${(sum / (input.length - 1)).toFixed(2)}`
  );
}

function library(input) {
  let searchedBook = input[0];
  let index = 1;
  while (index < input.length) {
    if (input[index] === searchedBook) {
      return console.log(`You checked ${index - 1} books and found it.`);
    } else if (input[index] === "No More Books") {
      return console.log(`The book you search is not here!
            You checked ${index - 1} books.`);
    }
    index++;
  }
}

function exam(input) {
  let badGradesNum = Number(input[0]);
  let gradesSum = 0;
  let badGrades = [];
  let lastProblem = "";
  let index = 1;
  let examIndex = 0;
  while (index < input.length) {
    if (index % 2 === 0) {
      gradesSum += Number(input[index]);
      examIndex++;
      if (Number(input[index]) <= 4) {
        badGrades.unshift(Number(input[index]));
      }
    } else {
      lastProblem = input[index];
    }
    if (badGrades.length === badGradesNum) {
      return console.log(`You need a break, ${badGradesNum} poor grades.`);
    }
    index++;
    if (input[index] === "Enough") {
      return console.log(`Average score: ${(gradesSum / examIndex).toFixed(2)}
Number of problems: ${examIndex}
Last problem: ${lastProblem}`);
    }
  }
}

function vacation(input) {
  let vacationMoney = Number(input[0]);
  let money = Number(input[1]);
  let index = 2;
  let dayCounter = 0;
  let spendCounter = 0;
  while (index < input.length) {
    if (input[index] === "save") {
      money += Number(input[index + 1]);
      spendCounter = 0;
    } else {
      money -= Number(input[index + 1]);
      spendCounter++;
      if (money < 0) {
        money = 0;
      }
    }
    dayCounter++;
    if (spendCounter === 5) {
      return console.log(`You can't save the money.
${dayCounter}`);
    }
    if (vacationMoney <= money) {
      return console.log(`You saved the money for ${dayCounter} days.`);
    }
    index += 2;
  }
}

function stepCounter(input) {
  let stepsGoal = 10000;
  let index = 0;
  let stepCounter = 0;
  while (index < input.length) {
    if (input[index] === "Going home") {
      stepCounter += Number(input[index + 1]);
      if (stepCounter < stepsGoal) {
        return console.log(
          `${stepsGoal - stepCounter} more steps to reach goal.`
        );
      }
      return console.log(`Goal reached! Good job!
            ${stepCounter - stepsGoal} steps over the goal!`);
    }
    stepCounter += Number(input[index]);
    index++;
  }
  if (stepCounter > stepsGoal) {
    return console.log(`Goal reached! Good job!
        ${stepCounter - stepsGoal} steps over the goal!`);
  } else {
    console.log(`${stepsGoal - stepCounter} more steps to reach goal.`);
  }
}

function coins(input) {
  let sum = Math.round(Number(input[0]) * 100);
  let coinCounter = 0;
  let division = 0;
  while (sum > 0) {
    if (sum >= 200) {
      division = sum - (sum % 200);
      sum -= division;
      division /= 200;
      coinCounter += division;
    } else if (sum >= 100) {
      division = sum - (sum % 100);
      sum -= division;
      division /= 100;
      coinCounter += division;
    } else if (sum >= 50) {
      division = sum - (sum % 50);
      sum -= division;
      division /= 50;
      coinCounter += division;
    } else if (sum >= 20) {
      division = sum - (sum % 20);
      sum -= division;
      division /= 20;
      coinCounter += division;
    } else if (sum >= 10) {
      division = sum - (sum % 10);
      sum -= division;
      division /= 10;
      coinCounter += division;
    } else if (sum >= 5) {
      division = sum - (sum % 5);
      sum -= division;
      division /= 5;
      coinCounter += division;
    } else if (sum >= 2) {
      division = sum - (sum % 2);
      sum -= division;
      division /= 2;
      coinCounter += division;
    } else {
      coinCounter++;
      sum--;
    }
  }
  console.log(coinCounter);
}

function cake(input) {
  let cakePiece = Number(input[0]) * Number(input[1]);
  index = 2;
  while (cakePiece > 0) {
    if (input[index] === "STOP") {
      return console.log(`${cakePiece} pieces are left.`);
    }
    cakePiece -= Number(input[index]);
    index++;
  }
  console.log(
    `No more cake left! You need ${Math.abs(cakePiece)} pieces more.`
  );
}

function move(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let cubicCapacity = width * length * height;
  index = 3;
  while (index < input.length) {
    if (input[index] === "Done") {
      return console.log(`${cubicCapacity} Cubic meters left.`);
    }
    cubicCapacity -= Number(input[index]);
    index++;
  }
  console.log(
    `No more free space! You need ${Math.abs(cubicCapacity)} Cubic meters more.`
  );
}
