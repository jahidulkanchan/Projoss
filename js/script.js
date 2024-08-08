// ======== Toggle Nav bar ==========
const menuBar = document.getElementById("bar");
const headerMenu = document.getElementById("header-menu");

menuBar.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  e.target.classList == "disable-item"
    ? headerMenu.classList.remove("active")
    : "";
});

// ========= Scroll to Top =========
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  pos > 200
    ? (scrollProgress.style.display = "grid")
    : (scrollProgress.style.display = "none");
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#4e4e4e ${scrollValue}%, #fcfcfc ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Owl-carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

// wow animate js
new WOW().init();