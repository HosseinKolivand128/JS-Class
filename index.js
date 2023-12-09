// let object = {
//     kitchen: "Pouria",
//     AGHA: "Abolfazl",
//     MORSHED: "HOSSEIN",
//     BacheMorshed: "Mobina",
//     khanumJalaseI: "Vajihe",
//     kafshJoftKon: "sara",
//     ghandPakhshKon: "DINA",
//     farshPahnkon: "Morteza",
//     sharbatPakhshkon: "ELIA",
//     jaruKesh: "Raziye",
//     zanjirZan: "ashkan",
//     shirTazie: "Mahsa",
//     chaiRiz: "Mahdis",
//     zarfiyatHosseiniye: 1000,


// //*regular function in obj
// fn1: function () {
//     return "dina1"
// },
// fn2() {
//     console.log("yechizi2");
//     return "fatemeh2"
// },

// /**Array */
// food: ["gheyme", "fesenjun", "ghorme", "adaspolo", "kabab", "zershkPolo"],

// /**object */
// taziye: {
//     hossein: 'gladiyator',
//     sara: "shemr",
//     abolfazl: "taziye khan"
// },

// /**Boolean */
// isHosseinMassom: true,

// }

/**spread */
const number = [10, 5, 20, 60, 30];
// const maxNum = Math.max(...number);

// console.log(maxNum);

//!remove item from array
const removedNum = 20;
const newNumber = [...number.slice(0, number.indexOf(removedNum)), ...number.slice(number.indexOf(removedNum) + 1)]
// console.log(newNumber);
// console.log(number);

//!copy array
const copy = [...number];
// console.log("copy", copy);

//!nested array
// const nestedArr = [1, [7, 6], [3, [5, 0, 9]]];
// console.log([...nestedArr]);
// console.log([].concat(...nestedArr));
// const newArray = [].concat(...[].concat(...nestedArr));
// console.log(newArray);

//!combine
const arr2 = [0, 0, 0, 0];
const combined = [10, 5, 20, ...arr2, 60, 30];

//todo OBJECTS

let object = {
    kitchen: "Pouria",
    AGHA: "Abolfazl",
    MORSHED: "HOSSEIN",
    BacheMorshed: "Mobina",
    khanumJalaseI: "Vajihe",
    kafshJoftKon: "sara",
    ghandPakhshKon: "DINA",
    farshPahnkon: "Morteza",
    sharbatPakhshkon: "ELIA",
    jaruKesh: "Raziye",
    zanjirZan: "ashkan",
    shirTazie: "Mahsa",
    chaiRiz: "Mahdis",
    zarfiyatHosseiniye: 1000,
}
const object2 = { new: { zanjirZan: "OMID", roll: "DJ" }, removed: { p2: "Ashkan" } };
//!concat objects
// const mergedObj = { ...object2 } //copy
//todo 1 can we use spread again to not access the object property by . notation
const mergedObj = {
    ...object2.new,
    ...object,
    zanjirZan: {
        ...object2.removed
    }
}
console.log(mergedObj);
/**
 * null//*
 * delete
 * undefined
 * removing prop from OBJ
 */
// const arr = [...object]
// const obj = { ...number }



//!update object
// const updatedObject = {
//     ...object2,
// ...object2.new.roll = "maddah",
// new: {//override
//     ...object2.new,
//     roll: "Maddah"//override
// },
// }
// let arr = { 0: 1, 1: 2, 2: 3 };
// console.log(arr);
// console.log(updatedObject);

//todo 2 fatemeh CODWARS
const number3 = [10, 5, 20, 60, 30];
const fn = (param) => {//rest //Argument
    // console.log(param);
}
// fn(number3)
fn(...number);//spread 

function yechizi(...param) { //rest
    console.log(param);
}
for (const iterator of object) {
    
}
yechizi(1, 2, "ghazal", "ghandPakhshkon", true, { a: 1, b: 2 })

//pointer

//!this in arrow -> where it is called
//!this in regular -> where it is defined
//todo 3 this
// const obj = {
//     obj2: {
//         fn: () => {

//         }
//     },
//     fn5: function rg() {

//     }
// }

// const obj3 = {

//     fn2: obj.obj2.fn()
// }
// obj.obj2.fn()//global
// function mobina() {
//     console.log(arguments);
// }
// mobina("bacheMorshed");

//return obj
// const array1 = [1, 2, 3]
// const fn5 = ([first, second, ...rest]) => { return { first, second, rest } };

// console.log(fn5(array1));



//todo 4 removing ashkan end time
//todo 5 get arg as array in one line DONE