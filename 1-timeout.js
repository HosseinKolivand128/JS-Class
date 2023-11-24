// setTimeout(() => {
//     console.log("Hellooo!!!");
// }, 2000);

// setTimeout(()=>{},delayTime)

// console.log("Good Bye!!!");
// console.log("Sara!!!");
// console.log("Dina !!!");
// console.log("Raziye !!!");

//Random number
// setInterval(() => {
//     console.log(Math.random());
// }, 3000)

//Clock
// let s = 0;//second
// let m = 0;//minute
// setInterval(() => {
//     s++
//     if (s === 60) {
//         m++;
//         s = 0;
//     }
//     console.log("minute :" + m + "second: " + s);
// }, 1000)

//clearInterval()

// let i = 0;
// const stopableInterval = setInterval(() => {
//     console.log(i++);
//     if (i === 6) {
//         clearInterval(stopableInterval);
//         console.log("STOP!!!!");
//     }
// }, 1000)

// anonymous function
/**ADVANCED CLOCK */

/**setInterval(function,second) */
const stop = setInterval(() => {
    let date = new Date();//get date and time from local system
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    if (date.getSeconds() === 35) {
        clearInterval(stop);
    }
}, 1000)

