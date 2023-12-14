// const heading = document.querySelectorAll("h1")
// const heading2 = document.getElementsByTagName("h1")

// console.dir(heading);//nodeList ->array
// console.log(heading2);//html collection ->array

/**diffrence
 * methods
 * returns everything inside a tag
*/

// const p = document.querySelector("header .heading #text");
// console.log(p);

//! change heading text
const headingText = document.querySelector("h1");
// console.log(headingText);
// headingText.innerHTML="Disco B" //!one
headingText.innerText = "Disco B" //*two better way to change text of an element


//! change navlinks 
const rooms = ["casino", "bar", "dance floor"];
const links = document.querySelectorAll("header ul li a")
// console.log(links);
// todo select by href att 
for (const key in links) {
    if (rooms[key] === undefined) {
        /**//todo */
        break

    }
    links[key].innerText = rooms[key];

}


//! give style to cards
const cards = document.querySelectorAll("#parts section");
console.log(cards);

//? giving styles which are ready in css file
cards.forEach(element => {
    element.setAttribute("class", "box")
});

//!giving style to cards title

const titles = document.querySelectorAll("#parts section p")
console.log(typeof titles[0]);
console.log(titles);
// console.log(titles[0].style);
titles.forEach((element, index) => {
    element.style.color = "red";
    element.style.fontWeight = "bold";
    element.style.fontSize = "25px"
    if (index === titles.length - 1) {
        element.innerText = "Vip Members"
    }
});

//?get attribute
// const contactUsClass = document.querySelector("header>a").getAttribute("class");
const contactUsClass = document.querySelector("header>a");

console.log(contactUsClass.classList);
//todo append another a to footer

//!make vip list for class in last card

const thirdBox = document.querySelector("#parts :nth-child(3)");
console.log(thirdBox);

const names = ["Asma", "Atie", "Bahareh", "Fatemeh", "Mahdie", "Maryam", "Sara"]
const ListSection = document.createElement("section");
const ListUl = document.createElement("ul");

names.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="names1">${element}</a> `;
    li.style.padding = "5px"
    ListUl.append(li)
    // ListUl.appendChild()
});



//! changing members ul style
ListUl.style.listStyleType = "none"

ListSection.append(ListUl);
thirdBox.append(ListSection);

document.querySelectorAll(".names1").forEach(element => {
    element.style.color = "white";
    element.style.textDecoration = "none";
    element.style.fontSize = "25px"
})


ListUl.style.display = "flex";
ListUl.style.flexFlow = "column";
ListUl.style.alignItems = "center";
ListUl.style.padding = "0";

// ListUl.style.justifyContent="";

const btn = document.querySelector("button");

console.log(btn.classList.add("btn"));

// btn.setAttribute("class", "abc")

// const footer = document.querySelector("footer")
// const div = document.createElement("div");
// div.innerText = "this is a div"
// footer.append(div);
// footer.remove(div);

// footer.classList.add("box")

// footer.setAttribute("class", "box")


const body = document.querySelector("body");
console.log(body.children);
console.log(body.children[7]);
console.log(Object.values(body.children[7]).includes("footer"));
let footer;

// console.log(typeof body.children[7].nodeName);
console.log(body.children[7]);
for (let i = 0; i < body.children.length; i++) {
    if (body.children[i].nodeName === "FOOTER") {
        console.log(body.children[i].nodeName);
    }
}
console.log(footer);
// children : returns only elements
// childNode : returns element content (everything)


// const div = document.createElement("div");
// footer.innerText = "THIS IS FOOTER"
// div.innerText = "THIS IS A DIV AS ADJACENT"
// footer.insertAdjacentElement('afterbegin', div)
// footer.insertAdjacentElement('afterend', div)
// footer.insertAdjacentElement('beforebegin', div)
// footer.insertAdjacentElement('beforeend', div)

// body.children

// const footer = {}

// const yechizi = [footer]
// console.log(yechizi);