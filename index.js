const rooms = ["casino", "bar", "dance floor"];
let classA = [
    {
        kitchen: "Pouria",

    },
    {

        AGHA: "Abolfazl",
    },
    {

        MORSHED: "HOSSEIN",
    },
    {

        BacheMorshed: "Mobina",
    },
    {

        khanumJalaseI: "Vajihe",
    },
    {

        kafshJoftKon: "sara",
    },
    {

        ghandPakhshKon: "DINA",
    },
    {

        farshPahnkon: "Morteza",
    },
    {

        sharbatPakhshkon: "ELIA",
    },
    {

        jaruKesh: "Raziye",
    },
    {

        zanjirZan: "ashkan",
    },
    {

        shirTazie: "Mahsa",
    },
    {

        chaiRiz: "Mahdis",
    },
    {

        zarfiyatHosseiniye: 1000,
    }
];

//! removing p tag
const paragraph = document.querySelector("#text");
//*1
// paragraph.remove();
//*2
paragraph.parentElement.removeChild(paragraph);

//! change heading text
const heading = document.querySelector(".heading");
console.dir(heading);
//*1
heading.textContent = "Disco A";
//*2
// heading.innerText = "class \n A \n\n this is wonderful class";

//*3 try not to use when you want to change text
// heading.innerHTML = "   class A <p> this is p tag</p>   "

heading.style.color = "purple";

//!give box class to the sections
//todo different for html collection and node list
const boxes = document.querySelectorAll("#parts section");

boxes.forEach(element => {
    //*1 class list
    // element.classList.add("box");
    //*2 set Attribute
    element.setAttribute("class", "box");

});

document.body.style.background = "black";


const circle = document.createElement("div");
circle.style.margin = "auto";
circle.style.borderRadius = "50%";
circle.style.width = "300px";
circle.style.height = "300px";
circle.style.backgroundColor = "black";

const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (let i = 0; i < 7; i++) {
    const tr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
        const td = document.createElement("td");
        td.setAttribute("class", "td")
        // td.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
        tr.append(td)

    }
    tbody.append(tr);
}

table.style.border = "1px ";
table.style.margin = "auto"
table.style.width = "100%"
table.style.height = "100%"
circle.style.overflow = "hidden";
circle.style.boxShadow = "0px 0px 25px red,0px 0px 100px purple,0px 0px 100px white "
table.append(tbody);

circle.append(table);

document.querySelector("header").insertAdjacentElement("afterend", circle);


//todo create a star as a hover btn to change bg color
function freeDance(police) {
    // document.body.style.backgroundColor = "black";
    console.log(police);
    clearInterval(police)
    return setInterval(() => {
        //todo different of childNode and children
        // console.log(table.childNodes);
        document.querySelectorAll(".td").forEach(element => {
            const randomColor = [Math.floor(Math.random() * 200 + 150), Math.floor(Math.random() * 210 + 1), Math.floor(Math.random() * 130 + 75)];
            element.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`
        });
    }, 300);

}
// clearInterval(freeDance())
function policeCall(dance) {
    console.log(dance);
    clearInterval(dance)
    let i = 0;
    return setInterval(() => {
        //todo different of childNode and children
        // console.log(table.childNodes);
        document.querySelectorAll(".td").forEach(element => {
            const randomColor = ["red", "blue"];
            element.style.backgroundColor = `${randomColor[i > 1 ? i = 0 : i]}`
            //todo
            i++;
        });
    }, 300);
}
// clearInterval(policeCall())


//! Change button Style and add event listener

const button = document.querySelector("button");
// button.textContent="theme"
button.style.width = '60px'
button.style.height = '35px';
button.style.borderRadius = "5px";
button.style.backgroundColor = "yellow";
button.style.boxShadow = "0 0 15px yellow";

button.addEventListener("click", (event) => {
    // console.log(event);
    var cancelDance;
    var cancelPolice;
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black";
        // clearInterval(cancelPolice);
        freeDance(policeCall());
    } else {
        document.body.style.backgroundColor = "white";
        const h2 = document.createElement("h2");
        h2.innerText = "DARE YE SEDAII MIYAD"
        document.body.append(h2)
        // clearInterval(cancelDance);
        policeCall(freeDance());
    }
})


const button1 = document.querySelector("#hosseiniye");
button1.addEventListener("click", () => {
    document.body.querySelector("#body").style.display = 'none'
    const body = document.createElement("section");
    body.style.backgroundColor = "green";
    const h1 = document.createElement("h1");
    h1.innerHTML = "یا حسین (ع)";
    h1.style.color = "red";
    body.style.margin = "auto"
    body.append(h1);
    document.body.append(body)



})
