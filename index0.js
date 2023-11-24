//!Block scope /

// {
//     let morteza=20;// blocked-scoped variable
//     // console.log(morteza);
// }
// console.log(morteza);

/**
 * loop
 * function
 * condition
 */
// if (condition) {

// }
// function sara(){

// }

// while (true) {

// }


//? Why not to use VAR? /
/**
 * can be redeclare
 * scopes
 * can access variable before declaration:result-> get undefined
 */

// getRequest
// var a=3;
// var a=2;

// function example() {
//     if (true) {
//         let x = 50;
//     }
//     console.log("in", x);
// }

// example();
// console.log("OUT", x);

// console.log(mobina);
// var mobina = "super energy";

// console.log(ghazal);
// let ghazal = "Mafia";

/**CONST */

//immutable(unchangable)
// const variable;

/**OBJECT */
let array = ["a", "b", "c", "d"];

/**object is key value */
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


    //*regular function in obj
    fn1: function () {
        return "dina1"
    },
    fn2() {
        console.log("yechizi2");
        return "fatemeh2"
    },

    /**Array */
    food: ["gheyme", "fesenjun", "ghorme", "adaspolo", "kabab", "zershkPolo"],

    /**object */
    taziye: {
        hossein: 'gladiyator',
        sara: "shemr",
        abolfazl: "taziye khan"
    },

    /**Boolean */
    isHosseinMassom: true,

}
/** */
//?dot notation
// console.log(object.kafshJoftKon);

//?bracket notation 
// console.log(object["MORSHED"]);

// console.log(object.yeChizi());
// console.log(object.yechizi2());
// object.yechizi2()

//!Note: This, is a pointer */

// const obj = {
//     kitchen: "Pouria",
//     AGHA: "Abolfazl",
//     MORSHED: "HOSSEIN",
//     BacheMorshed: "Mobina",
//     role: function () {
//         console.log(this);
//         // console.log(this.AGHA + " " + this.kitchen + " " + this.BacheMorshed + " " + this.MORSHED + " ");
//     }
// }

// console.log(this.AGHA);
// obj.role()

// for (const iterator of obj) {
//     console.log(iterator);
// }

/**forOf
 * @returns values of an array or object
 */
// for (const iterator of array) {
//     console.log(iterator);
// }

/**forIn 
 * @var array:
 * @returns indexes
 *
 * @var obj
 * @returns key
 */
// for (const key in array) {
//     console.log(key);

// }
//dynamic calling
// for (const key in obj) {
//     console.log(obj[key]);

// }
//using [] notation usually for dynamic key

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }
/** */
//! Dynamic property
// let mystery = "question";
// const obj = {
//     a: "a",//static
//     b: "b",
//     [mystery]: true,//dynamic
// }

// console.log(obj);
// console.log(obj[mystery]);


//! regular function
// function fullName() {
//     function name() {
//         let a;
//         let b;
//         console.log(this);//
//     }
//     name();
// }
// fullName();


// const obj3 = {
//     firstName: "Abolfazl",
//     lastName: "Co-Mentor",
//     greeting: function () {
//         // console.log(`hello ${firstName} ${lastName} `);//undefined
//         // console.log(`hello ${obj2.firstName} ${obj2.lastName} `);//to the obj2
//         console.log(`hello ${this.firstName} ${this.lastName} `);//to the obj2
//     }
// }
// obj3.greeting();

//! arrow function
// const fn = () => {
//     let a;
//     let b;
//     console.log(this);//point to window
// }
// fn();


// console.log("hellow");
// {
//     let a = 2
//     console.log("hello");
// }
