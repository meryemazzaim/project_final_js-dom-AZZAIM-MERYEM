

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

// let btn = document.querySelector('.btn')
// let modal = document.querySelector('.modal')
// btn.addEventListener('click', () => {
//     modal.style.display = "block"
// })



