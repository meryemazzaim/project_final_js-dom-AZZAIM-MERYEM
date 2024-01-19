

//!  Menu 
let menu_breakfast = document.querySelector('.breakfast')
let menu_lunch = document.querySelector('.Lunch')
let button_break = document.querySelector('.btn-break')
let button_lunch = document.querySelector('.btn-lunch')
button_lunch.addEventListener('click', () => {
    menu_breakfast.style.display = 'none'
    menu_lunch.style.display = 'block'
})
button_break.addEventListener('click', () => {
    menu_breakfast.style.display = 'block'
    menu_lunch.style.display = 'none'
})

// let myLogin = document.querySelector("#login")
// console.log(myLogin);
// let mySignup = document.querySelector("#signup")
// console.log(mySignup);

// let myLoginContent = document.querySelector("#logincontent")
// console.log(myLoginContent);
// let mySignupContent = document.querySelector("#signupcontent")
// console.log(mySignupContent);
// myLogin.addEventListener('click', () => {
//     myLoginContent.classList.remove("d-none")
//     mySignupContent.classList.add("d-none")
//     console.log(myLoginContent);
// })
// mySignup.addEventListener('click', () => {
//     mySignupContent.classList.remove("d-none")
//     myLoginContent.classList.add("d-none")
//     console.log(mySignupContent);
// })






