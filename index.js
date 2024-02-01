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

let isTrue = false
let flan = 2
while (isTrue === false && flan > 0) {
    setInterval(() => {

        if (isTrue === false) {
            document.querySelectorAll(".td").forEach(element => {
                const randomColor = [Math.floor(Math.random() * 200 + 150), Math.floor(Math.random() * 210 + 1), Math.floor(Math.random() * 130 + 75)];
                element.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`

            })
        }
    }, 300);
    flan--
    console.log('im in wile loop maingooy');
}











//! Change button Style and add event listener

const button = document.querySelector("button");
button.style.width = '60px'
button.style.height = '35px';
button.style.borderRadius = "5px";
button.style.backgroundColor = "yellow";
button.style.boxShadow = "0 0 15px yellow";

button.addEventListener("click", () => {
    if (isTrue === false) {
        isTrue = true
        let i = 0;
        let policeColor = setInterval(() => {

            if (isTrue === false) {
                clearInterval(policeColor)
                console.log('im not here yes?');
            }
            if (isTrue === true) {
                console.log('when isTrue=true you see me?');
                document.querySelectorAll(".td").forEach(element => {
                    const randomColor = ["red", "blue"];
                    element.style.backgroundColor = `${randomColor[i > 1 ? i = 0 : i]}`


                    i++;
                });
            }

        }, 1000);
    } else if (isTrue === true) {
        isTrue = false
    }


})


const URL = " https://65b552c241db5efd28679828.mockapi.io/Disco";

const Role = document.querySelector("#roles");
const Names = document.querySelector("#names");

const ulRole = document.createElement("ul");
const ulName = document.createElement("ul");

//!GET BY AXIOS
async function getData() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    };
    // const data = fetch(URL, { method: "GET" }).then(res => res.json()).then(data => data);
    const { data } = await axios.get(URL, config);
    // console.log(data);

    return data;
}
async function showUsers() {
    const users = await getData().then(data => data);
    users.forEach(element => {
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        li.textContent = element.name;
        li2.textContent = element.role;
        ulName.append(li);
        ulRole.append(li2);
    })
}
showUsers();

Role.append(ulRole);
Names.append(ulName);


//!PUT

async function modifyUser() {
    try {
        const update = {
            name: "Zahra"
        }
        const { data } = await axios.put(`${URL}/2`, update, {
            headers: {
                "content-type": "application/json"
            }
        });
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
// modifyUser();


//!POST
async function addUser() {
    const user = {
        name: "LADAN",
        role: "DEVELOPER"
    }

    const { data } = await axios.post(URL, user, {
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(data);
}
// addUser();

//!DELETE
async function deleteUser() {
    for (let i = 12; i > 9; i--) {
        const { data } = await axios.delete(`${URL}/${i}`)

        console.log(data);
    }
}
deleteUser();

// const x = users.then(user => user)
// console.log(x);

for (const iterator of object) {
    
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

[].forEach