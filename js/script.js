const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

carouselItems[currentIndex].classList.add("active");

carousel.addEventListener("click", () => {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  carouselItems[currentIndex].classList.add("active");
});

