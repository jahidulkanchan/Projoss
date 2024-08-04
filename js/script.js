const menuBar =  document.getElementById('bar');
const headerMenu = document.getElementById('header-menu');
menuBar.addEventListener('click',() =>{
  console.log('menuBar clicked');
  headerMenu.classList.toggle('active');
});
// Owl-carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true
      }
  }
})