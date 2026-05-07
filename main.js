let search=document.querySelector('.search-box'); //declare search box element

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active'); //toggle search box
    cart.classList.remove('active'); 
    user.classList.remove('active'); 
    navbar.classList.remove('active');


}

let cart=document.querySelector('.cart'); //declare cart element

document.querySelector('#cart-icon').onclick=()=>{
    cart.classList.toggle('active'); 
    search.classList.remove('active'); 
    user.classList.remove('active'); 
    navbar.classList.remove('active');


}

let user=document.querySelector('.user'); 

document.querySelector('#user-icon').onclick=()=>{
    user.classList.toggle('active'); 
    search.classList.remove('active'); 
    cart.classList.remove('active'); 
    navbar.classList.remove('active');

}
let navbar=document.querySelector('.navbar'); 

document.querySelector('#menu-icon').onclick=()=>{
    navbar.classList.toggle('active'); 
    search.classList.remove('active');
    cart.classList.remove('active'); 
    user.classList.remove('active'); 

}

window.onscroll=()=>{
    search.classList.remove('active'); 
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}


// header shadow on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
}); //add shadow to header on scroll





var swiper = new Swiper(".new-arrival", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 800,         
  autoplay: {
    delay: 5500,       
    disableOnInteraction: false,
  },
  grabCursor: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});