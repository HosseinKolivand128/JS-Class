const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine(...param) {//rest
    // Your code here
    // [{}, {}, {}] param
    let result = {};
    for (const iterator of param) {//to get objects of array in param 


        for (const key in iterator) {// to get properties of obj 
            if (!(key in result)) {
                result[key] = iterator[key]
            } else {
                result[key] += iterator[key]
            }
        }
    }
    console.log(result);
}
combine(objA, objB, objC)