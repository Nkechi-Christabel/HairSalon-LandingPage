const carouselPrev = document.querySelector(".btn-left");
const carouselNext = document.querySelector(".btn-right");
const hero = document.querySelector(".hero-section");

let counter = 0;

let imageArr = [
  "./images/hero.jpeg",
  "./images/image-1.jpg",
  "./images/image-2.jpg",
  "./images/image-3.jpg",
];

carouselPrev.addEventListener("click", prevSlide);
carouselNext.addEventListener("click", nextSlide);

function prevSlide() {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  if (counter === 0) {
    carouselPrev.style.pointerEvents = "none";
    carouselPrev.style.opacity = "0.3";
  } else {
    carouselNext.style.pointerEvents = "auto";
    carouselNext.style.opacity = "1";
  }
  hero.style.backgroundImage = `url(${imageArr[counter]})`;
}

function nextSlide() {
  counter++;
  if (counter > imageArr.length - 1) {
    counter = imageArr.length - 1;
  }
  if (counter === imageArr.length - 1) {
    carouselNext.style.pointerEvents = "none";
    carouselNext.style.opacity = "0.3";
  } else {
    carouselPrev.style.pointerEvents = "auto";
    carouselPrev.style.opacity = "1";
  }
  hero.style.backgroundImage = `url(${imageArr[counter]})`;
}
