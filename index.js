// function vajihe (number,symbol){

// if (symbol==="^") {
//     number=number**2
// } else if(symbol==="**") {
//     number*=2;
// }else if(symbol==="***"){
//     number=Math.pow(number,3);
// }

// switch (symbol){
//     case "^":
//         number=number**2;
//     break;
//     case "**":
//         number *= 2;
//     break;
//     case "***":
//         number = Math.pow(number, 3);
//     break;
// }
// // console.log(number)
// return number;
// }

// // vajihe();



// // vajihe(9,"**")

// // let result = vajihe(9, "^");
// // console.log(result);

// // vajihe(9,"***")


// const user1 = ["mobina", "pariya", "ghazal", "mahdis"];
// const user2=[];
// const user3 = []
// for (let i = 0; i < user1.length; i++) {
//     // const element = array[i];
//     user2[i]= user1[2 * i - 1];
//     user3[i] = user1[2 * i];
// }

// console.log("user 1:" + user1);
// console.log("user 2:" + user2);
// console.log("user 3:" + user3);


// user[2]
// function checkValidUser (name){

//     for (let i = 0; i < 9; i++) {
//         if (user[i]===name) {
//            if(checkValidPass()===true){
//             return true;
//            }
//         }
//     }
//     return false;
// }


// let name = prompt("enter a name");


// console.log(checkValidUser(name));

// function matrix(){
//     let arr = [[],[],[],[],[],[]];
//     for (let i = 0; i < 6; i++) {
//         for (let j = 0; j < 6; j++) {
//             if (i===j) {
//                 arr[i][j]=0;
//             }else if (j%3==0) {
//                 arr[i][j]=3;
//             }else{
//                 arr[i][j]=Math.floor(Math.random()*100+1)
//             }

//         }
//     }

//     return arr;
// }

// console.log(matrix());
let j = 100;
while (true) {
    j--;
    // if (j === 0) {
    //     break;
    // }
    console.log(j);

}

