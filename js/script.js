const menuBar =  document.getElementById('bar');
const headerMenu = document.getElementById('header-menu');
menuBar.addEventListener('click',() =>{
  console.log('menuBar clicked');
  headerMenu.classList.toggle('active');
});

// ========= Scroll to Top =========
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight); 

  pos > 200? scrollProgress.style.display = "grid": scrollProgress.style.display = "none";
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#08b76b ${scrollValue}%, #f3f3f3 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Owl-carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true
      }
  }
})