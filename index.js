const burgerIcon=document.querySelector("#burger");
const navbarMenue=document.querySelector("#nav-links");

burgerIcon.addEventListener('click',()=>
{
    navbarMenue.classList.toggle('is-active');
});