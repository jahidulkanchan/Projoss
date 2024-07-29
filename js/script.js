const menuBar =  document.getElementById('bar');
const headerMenu = document.getElementById('header-menu');
menuBar.addEventListener('click',() =>{
  console.log('menuBar clicked');
  headerMenu.classList.toggle('active');
});