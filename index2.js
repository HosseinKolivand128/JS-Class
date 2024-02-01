// const URL = "https://65b552c241db5efd28679828.mockapi.io/Disco"
// console.log(axios.get(URL));

// const arr = [];
// function greeting() {
//     console.log("hello");
// }
// arr.__proto__ = greeting;

// arr.greeting;



//!factory function

// function createPerson(name, favoriteTeam, greeting) {
//     const person = {};

//     person.name = name
//     person.favoriteTeam = favoriteTeam;
//     person.greeting = greeting;

//     return person;

// }

// const omid = createPerson("omid", "Barcelona", () => { console.log("I love perspolis") });
// const mobina = createPerson("omid", "Barcelona", () => { console.log("I love perspolis") });
// const amin = createPerson("omid", "Barcelona", () => { console.log("I love perspolis") });
// const sara = createPerson("omid", "Barcelona", () => { console.log("I love perspolis") });


// // const name=new String("omid")
// // const arr=new Array()

// JSON.stringify({ name: "shirin", major: "mathematic" })//convert Object to Json
// //{ "name": "shirin", "major": "mathematic" }

// JSON.parse()//convert Json to Object

//!fetch API

const URL2 = "https://65b552c241db5efd28679828.mockapi.io/Disco/1"

// async function fetchData() {
//     try {
//         //!GET
//         const data = await fetch(URL, { method: "GET" }).then(res => res.json()).then(data => data);
//         // console.log(data);
//         //!POST
//         data.forEach((element) => {
//             fetch(URL, { method: "POST", body: JSON.stringify(element), headers: { "content-type": "application/json" } })
//         });

//         await fetch(URL, { method: "GET" }).then(res => res.json()).then(data => console.log(data));
//     } catch (error) {
//         console.log(error);
//         return 0;
//     }
// }

// fetchData();
//!PUT
// async function modifyData() {
//     try {
//         await fetch(`${URL}/1`, { method: "PUT", body: JSON.stringify({ name: "DINA" }), headers: { "content-type": "application/json" } })

//     } catch (error) {
//         console.log(error);
//         return 0;

//     }
// }

// let id = 0
// modifyData();
// async function deleteData() {
//     try {
//         return await fetch(`${URL}/${id}`, { method: "DELETE" })

//     } catch (error) {
//         console.log(error);
//         return 0;

//     }
// }

// if (deleteData() === 0) {
//     id++;
//     deleteData();
// }

// console.log(

//     axios.get(URL)
// );