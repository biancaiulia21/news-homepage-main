const mobile_menu=document.querySelector('#mobile__menu');
const page_menu=document.querySelector('.page__menu');

mobile_menu.addEventListener('click', function(){
  mobile_menu.classList.toggle('is-active');
  page_menu.classList.toggle('active');
})