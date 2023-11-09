/**
 * Question:
 * This is a dice game played with five six-sided dice.you should score a throw according to the below rules.


*Rules:
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point
*

* 1)You should generate dices numbers then pass it to the calculate function to calculate the score.

* EXAMPLE
Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

 */

/** @todo WRITE YOUR CODES BELOW THIS */
const rolldice = () => Math.floor(Math.random() * 6) + 1;
const diceNumbs = [];
diceNumbs.push(rolldice());
diceNumbs.push(rolldice());
diceNumbs.push(rolldice());
diceNumbs.push(rolldice());
diceNumbs.push(rolldice());
let SortedDiceNumbsString = diceNumbs.sort().join("");

console.log(SortedDiceNumbsString);
score = 0;
if (SortedDiceNumbsString.includes("111")) {
  score += 1000;
  SortedDiceNumbsString = SortedDiceNumbsString.replace("111", "");
  if (SortedDiceNumbsString[0] === "1") {
    score += 100;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    } else if (SortedDiceNumbsString[1] === "1") {
      score += 100;
    }
  } else if (SortedDiceNumbsString[0] === "5") {
    score += 50;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  } else {
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  }
} else if (SortedDiceNumbsString.includes("666")) {
  score += 600;
  SortedDiceNumbsString = SortedDiceNumbsString.replace("666", "");
  if (SortedDiceNumbsString[0] === "1") {
    score += 100;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    } else if (SortedDiceNumbsString[1] === "1") {
      score += 100;
    }
  } else if (SortedDiceNumbsString[0] === "5") {
    score += 50;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  } else {
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  }
} else if (SortedDiceNumbsString.includes("555")) {
  score += 500;
  SortedDiceNumbsString = SortedDiceNumbsString.replace("555", "");
  if (SortedDiceNumbsString[0] === "1") {
    score += 100;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    } else if (SortedDiceNumbsString[1] === "1") {
      score += 100;
    }
  } else if (SortedDiceNumbsString[0] === "5") {
    score += 50;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  } else {
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  }
} else if (SortedDiceNumbsString.includes("444")) {
  score += 400;
  SortedDiceNumbsString = SortedDiceNumbsString.replace("444", "");
  if (SortedDiceNumbsString[0] === "1") {
    score += 100;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    } else if (SortedDiceNumbsString[1] === "1") {
      score += 100;
    }
  } else if (SortedDiceNumbsString[0] === "5") {
    score += 50;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  } else {
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  }
} else if (SortedDiceNumbsString.includes("333")) {
  score += 300;
  SortedDiceNumbsString = SortedDiceNumbsString.replace("333", "");
  if (SortedDiceNumbsString[0] === "1") {
    score += 100;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    } else if (SortedDiceNumbsString[1] === "1") {
      score += 100;
    }
  } else if (SortedDiceNumbsString[0] === "5") {
    score += 50;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  } else {
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  }
} else if (SortedDiceNumbsString.includes("222")) {
  score += 200;
  SortedDiceNumbsString = SortedDiceNumbsString.replace("222", "");
  if (SortedDiceNumbsString[0] === "1") {
    score += 100;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    } else if (SortedDiceNumbsString[1] === "1") {
      score += 100;
    }
  } else if (SortedDiceNumbsString[0] === "5") {
    score += 50;
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  } else {
    if (SortedDiceNumbsString[1] === "5") {
      score += 50;
    }
  }
} else {
  for (let i = 0; i < SortedDiceNumbsString.length; i++) {
    if (SortedDiceNumbsString[i] === "1") {
      score += 100;
    } else if (SortedDiceNumbsString[i] === "5") {
      score += 50;
    }
  }
}
console.log(score);
