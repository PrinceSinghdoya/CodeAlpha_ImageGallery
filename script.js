/* ========================= script.js ========================= */

const cards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filter-btn");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const topBtn = document.getElementById("topBtn");

let currentIndex = 0;

const images = [];

/* STORE IMAGES */

cards.forEach((card, index) => {

  const img = card.querySelector("img");

  images.push(img.src);

  card.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

    currentIndex = index;

  });

});

/* CLOSE LIGHTBOX */

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

/* NEXT IMAGE */

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex];

});

/* PREVIOUS IMAGE */

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  lightboxImg.src = images[currentIndex];

});

/* CLOSE WHEN CLICK OUTSIDE */

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){
    lightbox.style.display = "none";
  }

});

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", (e) => {

  if(e.key === "Escape"){
    lightbox.style.display = "none";
  }

  if(e.key === "ArrowRight"){
    nextBtn.click();
  }

  if(e.key === "ArrowLeft"){
    prevBtn.click();
  }

});

/* FILTER FUNCTIONALITY */

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    document.querySelector(".filter-btn.active")
    .classList.remove("active");

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if(filter === "all" ||
         card.dataset.category === filter){

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});

/* BACK TO TOP BUTTON */

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

/* SCROLL TO TOP */

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});