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
let dice1 = Math.floor(Math.random()*6)+1;
let dice2 = Math.floor(Math.random()*6)+1;
let dice3 = Math.floor(Math.random()*6)+1;
let dice4 = Math.floor(Math.random()*6)+1;
let dice5 = Math.floor(Math.random()*6)+1;
const some = dice1.toString() + dice2.toString() + dice3.toString() +dice4.toString() + dice5.toString();

console.log(`Throw :${some}`);

function newScore(some) {
    
//1
let first = some.replaceAll('1', '');
let score1 = []
if (first.length === 1) {
    score1.push(1100);
}else if (first.length === 2){
    score1.push(1000);
}else if (first.length === 3){
    score1.push(200);
}else if (first.length === 4){
    score1.push(100);
}else if (first.length === 5){
    score1.push(0);
}else{
    score1.push(1200);
}


//6
let score2 = []
let second = some.replaceAll('6', '');
if (second.length === 2) {
    score2.push(600);
}else{
    score2.push(0);
}


//5
let score3 = []
let third = some.replaceAll('5', '');
if (third.length === 1) {
    score3.push(550);
}else if (third.length === 2){
    score3.push(500);
}else if (third.length === 3){
    score3.push(100);
}else if (third.length === 4){
    score3.push(50);
}else if (third.length === 5){
    score3.push(0);
}else{
    score3.push(600);
}


//4
let score4 = []
let fourth = some.replaceAll('4', '');
if (fourth.length === 2) {
    score4.push(400);
}else{
    score4.push(0);
}

//3
let score5 = []
let fifth = some.replaceAll('3', '');
if (fifth.length === 2) {
    score5.push(300);
}else{
    score5.push(0);
}


//2
let score6 = []
let sixth = some.replaceAll('2', '');
if (sixth.length === 2) {
    score6.push(200);
}else{
    score6.push(0);
}

const sum = parseInt(score1.toString()) + parseInt(score2.toString()) + parseInt(score3.toString()) + parseInt(score4.toString()) + parseInt(score5.toString()) + parseInt(score6.toString());
return sum;
}

console.log(`Score :${newScore(some)}`);