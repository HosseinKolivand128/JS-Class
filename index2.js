//!access element by its ID
// const h1 = document.getElementById("title");
// h1.innerHTML="hosseiniye";
// console.dir(document.body.children[0]);

//!access element by class
// const inputs = document.getElementsByClassName("inputs");
// const p = document.getElementsByClassName("paragraph");
// inputs[0].innerHTML = "ABC"
// p[0].innerHTML = "ABC"
// p[1].innerHTML = "DEF"
// inputs[0].attributes[2].nodeValue = "Mobina"
// console.log(p);

//!access all tags by their name;
// const h2 = document.getElementsByTagName("h2");
// for (const iterator of h2) {
//     iterator.innerHTML = "dina"
// }
// console.log(h2);


//? /**QUERY SELECTOR */

const h2 = document.querySelector("h2")

const h2id = document.querySelector("#c")
h2id.innerHTML = "cID";
const h2class = document.querySelector(".e")
h2class.innerHTML = "class E";

const imgAlt = document.querySelector('img[alt="cat"]');
console.log(imgAlt);

const subBtn = document.querySelector('button[type="submit"]')
console.log(subBtn);
const h2all = document.querySelectorAll("h2")
// document.body.remove(imgAlt);
// console.log(h2);
// console.log(h2all);