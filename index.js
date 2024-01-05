//! This keyword
// const heading = document.querySelector('h1');
// const heading2 = document.querySelector('h2');
// const ul = document.querySelector('ul');
// ul.style.backgroundColor = "cyan"
// heading.addEventListener('click', function () {
//     console.log(this);//!show the target element
//                       //* this in regular function is like e.target (we rather use e.target usually)
//     heading.style.color = "red";
// })

// heading2.addEventListener('click', (e) => {
//     console.log(this);//!show the window
//     heading2.style.color = "purple";
// })

// heading.addEventListener('click', (e) => {
//     console.log(e.target);
// })
// ul.addEventListener('click', (e) => {
//     console.log(e);
// })

const users = [];

//! Project 1 

const heading = document.createElement('h1');
heading.textContent = "Party Signup Form";
heading.style.color = "darkblue";
heading.style.textAlign = "center";

document.body.append(heading);

const section = document.createElement('section');
const form = document.createElement('form');

const emailInput = document.createElement('input');
const passwordInput = document.createElement('input');

emailInput.type = "text"
// emailInput.type = "email"
const labelEmail = document.createElement('label');
const labelPassword = document.createElement('label');

//? Captcha
const captcha = document.createElement('section');
const inputDiv = document.createElement('input');
const codeDiv = document.createElement('div');
const reCode = document.createElement('input');

reCode.value = "R"
reCode.type = "button"
//* Style Captcha
captcha.style.display = "flex";
captcha.style.justifyContent = "center";
captcha.style.alignItems = "center";
inputDiv.style.maxWidth = "30px";
captcha.style.margin = "5px"
reCode.style.borderRadius = "5px"
reCode.style.backgroundColor = "blue"
captcha.append(inputDiv, codeDiv, reCode)

function generateCaptcha() {
    let number = Math.floor(Math.random() * 9999 + 1000)
    return number;
}

function checkCaptcha(captcha) {
    if (captcha === codeDiv.textContent) {
        return true
    }
    return false
}

codeDiv.textContent = generateCaptcha();

reCode.addEventListener("click", () => {
    codeDiv.textContent = generateCaptcha();
})




const submitBtn = document.createElement("button")

submitBtn.textContent = "SignUp";
//*style btn
submitBtn.style.margin = "10px 0 0 10px"

labelEmail.textContent = "Email";
labelPassword.textContent = "Password";

form.append(labelEmail, emailInput, labelPassword, passwordInput, captcha, submitBtn);

//* style form 
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center"
form.style.flexFlow = "column ";

section.append(form);
document.body.append(section)

function addUser(email) {
    const li = document.createElement("li");
    li.textContent = email;
    // li.addEventListener("click", (e) => {
    //    li.remove();
    // })
    return li
}



//? create users list

const usersList = document.createElement("section");
const list = document.createElement("ul");



form.addEventListener("submit", (e) => {
    e.preventDefault();// to prevent the form default behavior like reload the page
    // alert("submitted")
    //todo 
    if (!(emailInput.value === "") && checkCaptcha(inputDiv.value)) {
        list.append(addUser(emailInput.value));
        users.push({ email: emailInput.value, password: passwordInput.value })
    }
    console.log(users);

})

usersList.append(list);
document.body.append(usersList)



//! DELEGATION (note: it's better to remove an element from its parent)
list.addEventListener("click", (e) => {
    // console.dir(e.target);
    if (e.target.localName === "li") {
        e.target.remove()
    }
})


//! Bubbling
const p = document.querySelector("#p1")
const div = document.querySelector("#d1")
const section1 = document.querySelector("#s1")

p.addEventListener('click', (e) => {
    // e.stopPropagation();//!to stop the parents propagation
    // e.stopImmediatePropagation();//! to stop similar element listeners
    alert("Hey this is p tag")
})
p.addEventListener('click', (e) => {
    // e.stopPropagation();
    // e.stopImmediatePropagation();
    alert("Hey this is p tag")
})
p.addEventListener('click', (e) => {
    e.stopPropagation();
    // e.stopImmediatePropagation();
    alert("Hey this is p tag")
})
p.addEventListener('click', (e) => {
    // e.stopImmediatePropagation();
    alert("Hey this is p tag")
})

div.addEventListener('click', (e) => {
    // e.stopPropagation();
    alert("Hey this is div tag")

})
section1.addEventListener('click', (e) => {
    alert("Hey this is section tag")

})
//! Change
const changeLabel = document.createElement("label");
changeLabel.textContent = "Change";

const pTag = document.createElement("p");
const changeInput = document.createElement("input");
changeInput.addEventListener("change", (e) => {
    pTag.textContent = e.target.value
})
document.body.append(pTag, changeLabel, changeInput)

//! Resize

//?Remind me to make a project with resize