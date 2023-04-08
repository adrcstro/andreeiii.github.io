/* hamberger bar show and hide  */
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchform.classList.remove('active');
}
/* shooping cart show and hide  */

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    
}


/* search bar show and hide  */
let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}



window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchform.classList.remove('active');
}



/* stickin navivation bar */
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
    ('window-scroll', window.scrollY > 100)
})