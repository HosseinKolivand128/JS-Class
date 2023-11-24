const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 76];

// if your gonna receive a boolean value, start your variable/function's name with "is"
//even


let isPass = exams.every((passScore) => passScore > 76);
console.log(isPass);
//even
let isPassing;

// some
let isAnyOnePassed = exams.some((passScore) => passScore > 99);
console.log(isAnyOnePassed);

// some
let isGradeA;

// some
let isGradeD;

let evens = [2, 4, 6, 8];
const mixes = [1, 4, 6, 8];
const consequence = [1, 2, 3];


/**
 * @param : SOME , EVERY
 * @returns :BOOLEAN
 * 
 * @param: map, filter
 * @returns: ARRAY
 * 
 * @param: forEach, reduce
 * @returns: single value
 * 
 * ALL OF THEM ARE NOT DESTRUCTIVE
 */