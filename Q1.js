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

const number = () => Math.floor(Math.random() * 6 + 1);
/**
 * {}: we can don't use return but it wont return anything
 * {}: if we need something to return we should use return statement inside the {}
 * 
 * -: it returns automatically just one order.
*/


// console.log(dice);

const score = (dice) => {
    const count = [0, 0, 0, 0, 0, 0];
    let score = 0;
    for (const number of dice) {
        switch (number) {
            case 1:
                count[0]++
                break;
                case 2:
                    count[1]++
                    
                    break;
                    case 3:
                        count[2]++
                        
                        break;
                        case 4:
                            count[3]++
                            
                            break;
                            case 5:
                                count[4]++
                                
                                break;
                                case 6:
                count[5]++
                
                break;
            }
        }
    for (let i = 0; i < 6; i++) {
        // const element = array[i];
        if (count[i] >= 3) {
            switch (i) {
                case 0:
                    score += 1000;
                    break;
                    case 1:
                        score += 200;
                        break;
                        case 2:
                            score += 300
                            break;
                            case 3:
                                score += 400
                                break;
                                case 4:
                                    score += 500
                                    break;
                                    case 5:
                    score += 600
                    break;
                }
        }
    }
    if (count[0] > 3) {
        score = score + ((count[0] - 3) * 100)
    } else if (count[0] < 3 && count[0] !== 0) {
        score = score + (count[0] * 100)
    }
    if (count[4] > 3) {
        score = score + ((count[4] - 3) * 50)
    } else if (count[4] < 3 && count[4] !== 0) {
        score = score + (count[4] * 50)
    }
    return score;
}

score(dice);

// let variable= score(dice)

// let dice = [];
// for (let i = 0; i < 40; i++) {
//     for (let i = 0; i < 5; i++) {
//         dice[i] = number();
//     }
//     console.log(score(dice));
// }

