const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
const hosseiniye = ["sara ", "mahdis ", "Mahsa ", "DINA ", "RAZIYEH ", "Pouria ", "FATEMEH "];
const arr = [1, 2, 3];
/**for loop */
// let total = 0;
// prices.forEach(element => {
//     total += element;
// });
// console.log(total);

/**REDUCE */
/**
 * @returns: a single value -> total
 * accumulate
 * 
 */
// reduce((acc,element)=>{},initialValue)
// let totalPrice = arr.reduce((total, price) => {
//     console.log("total", total);
//     console.log("price", price);

//     return total + price;

// }, 0);
// console.log(totalPrice * 5);

const namees = hosseiniye.reduce((acc, name) => {
    if (name === "Pouria ") {
        return acc + ""
    } else
        return acc + name
}, "")
let acc = ""
hosseiniye.forEach((name) => {
    // console.log();
    if (name === "Pouria ") {
        acc += ""
    } else
        acc = acc + name
})

console.log(acc);