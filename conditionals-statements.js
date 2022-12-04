function excellent(input) {
  let result;
  if (Number(input[0]) >= 5.5) {
    console.log("Excellent!");
  }
}

function greaterThan(input) {
  if (Number(input[0]) > Number(input[1])) {
    console.log(input[0]);
  } else {
    console.log(input[1]);
  }
}

function oddOrEven(input) {
  if (Number(input[0]) % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

function passGuess(input) {
  if (input[0] === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}

function numberGuess(input) {
  if (Number(input[0]) < 100) {
    console.log("Less than 100");
  } else if (Number(input[0]) <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}

function speedInfo(input) {
  let speed =
    Number(input[0]) <= 10
      ? "slow"
      : Number(input[0]) <= 50
      ? "average"
      : Number(input[0]) <= 150
      ? "fast"
      : Number(input[0]) <= 1000
      ? "ultra fast"
      : "extremely fast";
  console.log(speed);
}

function figure(input) {
  let area;
  if (input[0] === "square") {
    area = Number(input[1]) * Number(input[1]);
  } else if (input[0] === "rectangle") {
    area = Number(input[1]) * Number(input[2]);
  } else if (input[0] === "circle") {
    area = Number(input[1]) * Number(input[1]) * Math.PI;
  } else {
    area = (Number(input[1]) * Number(input[2])) / 2;
  }
  console.log(Number(area).toFixed(3));
}

function sumSeconds(input) {
  let time = Number(input[0]) + Number(input[1]) + Number(input[2]);
  let seconds = time % 60;
  let minutes = (time - seconds) / 60;
  if (seconds < 10) {
    seconds = "0" + (time % 60);
  }
  console.log(`${minutes}:${seconds}`);
}

function bonusScore(input) {
  let score = Number(input[0]);
  let bonusPoints = 0;
  if (score > 1000) {
    score *= 1.1;
    bonusPoints = Number(input[0]) * 0.1;
  } else if (score > 100) {
    score *= 1.2;
    bonusPoints = Number(input[0]) * 0.2;
  } else if (score <= 100) {
    score += 5;
    bonusPoints += 5;
  }

  if (Number(input[0]) % 2 === 0) {
    score += 1;
    bonusPoints += 1;
  } else if (Number(input[0]) % 10 === 5) {
    score += 2;
    bonusPoints += 2;
  }
  console.log(bonusPoints);
  console.log(score);
}

function timeIncrement(input) {
  let hour = Number(input[0]);
  let minutes = Number(input[1]);

  minutes += 15;
  if (minutes > 59) {
    minutes -= 60;
    hour += 1;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  }
  if (hour > 23) {
    hour -= 24;
  }
  console.log(`${hour}:${minutes}`);
}

function toyShop(input) {
  let totalAmount =
    Number(input[1]) +
    Number(input[2]) +
    Number(input[3]) +
    Number(input[4]) +
    Number(input[5]);
  let total =
    Number(input[1]) * 2.6 +
    Number(input[2]) * 3 +
    Number(input[3]) * 4.1 +
    Number(input[4]) * 8.2 +
    Number(input[5]) * 2;
  if (totalAmount >= 50) {
    total *= 0.75;
  }
  total *= 0.9;
  let vacationConfirmation = "";
  if (total >= Number(input[0])) {
    vacationConfirmation = `Yes! ${(total - Number(input[0])).toFixed(
      2
    )} lv left.`;
  } else {
    vacationConfirmation = `Not enough money! ${(
      Number(input[0]) - total
    ).toFixed(2)} lv needed.`;
  }
  console.log(vacationConfirmation);
}

function kongVZilla(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let decor = budget * 0.1;
    let clothes = statists * Number(input[2]);
    if (statists > 150) {
        clothes *= 0.9;
    }
    let expenses = decor + clothes;
    let log1 = "";
    let log2 = "";
    if (expenses > budget) {
        log1 = "Not enough money!";
        log2 = `Wingard needs ${(expenses - budget).toFixed(2)} leva more.`
    } else {
        log1 = "Action!";
        log2 = `Wingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`
    }
    console.log(log1);
    console.log(log2);
}

function swim(input){
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);
    let timeNeeded = distance * speed;
    let fatigue = Math.floor(distance / 15) * 12.5;
    timeNeeded += fatigue;
    let log1 = "";
    if(timeNeeded >= recordTime){
        log1 = `No, he failed! He was ${Number(timeNeeded - recordTime).toFixed(2)} seconds slower.`;
    } else {
        log1 = `Yes, he succeeded! The new world record is ${Number(timeNeeded).toFixed(2)} seconds.`
    }
    console.log(log1);
}

function shopping(input) {
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);
    let totalGPU = GPU * 250;
    let totalCPU = (totalGPU * 0.35) * CPU;
    let totalRAM = (totalGPU * 0.1) * RAM;
    let total = totalGPU + totalCPU + totalRAM;
    let log1 = "";
    if(GPU > CPU) {
        total *=0.85;
    }
    if(total <= budget){
        log1 = `You have ${Number(budget - total).toFixed(2)} leva left!`;
    } else {
        log1 = `Not enough money! You need ${Number(total - budget).toFixed(2)} leva more!`;
    }
    console.log(log1);
}

function lunchBreak(input) {
    let title = input[0];
    let episodeLength = Number(input[1]);
    let lunchBreakLength = Number(input[2]);
    let lunchTime = lunchBreakLength / 8;
    let relaxTime = lunchBreakLength / 4;
    let movieTime = lunchBreakLength - lunchTime - relaxTime;
    let freeTime = lunchBreakLength - episodeLength - lunchTime - relaxTime;
    let log1 = "";
    if (movieTime >= episodeLength) {
        log1 = `You have enough time to watch ${title} and left with ${Math.ceil(freeTime)} minutes free time.`;
    } else {
        log1 = `You don't have enough time to watch ${title}, you need ${Math.ceil(Math.abs(freeTime))} more minutes.`
    }
    console.log(log1);
}
