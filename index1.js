const arr = [1, 2, 3]
const obj = { a: 1, b: 2 }
for (const key in obj) {//get key
    console.log(obj[key]);
}
for (const key in arr) {
    console.log(key);
}
// for (const iterator of obj) {
//     console.log(iterator);
// }