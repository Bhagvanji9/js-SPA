const menuSlider = document.querySelector(".menu-slider");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");
const menuBtn = document.querySelector(".menu-btn");
const zoomImage = document.getElementById("full-image");
const imageView = document.querySelector("#image-viewer");

const close = document.querySelectorAll(".close ");

menuBtn.addEventListener("click", function slide(e) {
  console.log(breakfast.clientWidth);
  if (e.target.value === "breakfast") {
    scrolled = 0;
  } else if (e.target.value === "lunch") {
    scrolled = lunch.clientWidth;
  } else if (e.target.value === "dinner") {
    scrolled = lunch.clientWidth + breakfast.clientWidth;
  }
  menuSlider.scrollLeft = scrolled;
});
let scrolled = 0;
let today = new Date().toISOString().slice(0, 16);
document.getElementsByName("datetime")[0].min = today;

const image = document.querySelectorAll(".images img");
let element1, element2;
image.forEach((element) => {
  element.addEventListener("click", () => {
    element2 = element.id;
    // element1 = element.id;
    zoomImage.src = element.src;
    imageView.style.display = "flex";
  });
});

close.forEach((e) => {
  e.addEventListener("click", () => {
    let i;
    let newid = Number(element2);
    if (e === close[0]) {
      imageView.style.display = "none";
    } else if (e === close[1]) {
      if (newid === 1) {
        newid = 9;
      }
      zoomImage.src = document.getElementById(String(newid - 1)).src;
      element2 = newid - 1;
    } else if (e === close[2]) {
      if (newid === 8) {
        newid = 0;
      }

      zoomImage.src = document.getElementById(String(newid + 1)).src;
      element2 = newid + 1;
    }
  });
});

const hamburger = document.querySelectorAll(".display-menu");
const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const navigation = document.querySelector(".navigation1");

console.log("hamburger", hamburger);
console.log(openMenu);
hamburger.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("menu-open")) {
      element.classList.remove("active");
      closeMenu.classList.add("active");
      navigation.style.display = "block";
    } else {
      element.classList.remove("active");
      openMenu.classList.add("active");
      navigation.style.display = "none";
    }
  });
});

const mybutton = document.getElementById("myBtn");

mybutton.addEventListener("click", scrollToTop);

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
}
