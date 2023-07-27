
//car slider 
let currentIndex = 0;
let slideImages = document.querySelectorAll('.our-slider-con .slides img');
let nextButton = document.querySelector('.our-slider-con .next');

nextButton.addEventListener('click', function () {
  slideImages[currentIndex].classList.add('slideOut');

  let nextIndex = (currentIndex + 1) % slideImages.length;

  slideImages[nextIndex].classList.add('slideIn');

  setTimeout(function () {
    slideImages[currentIndex].classList.remove('active', 'slideOut');
    slideImages[nextIndex].classList.remove('slideIn');
    slideImages[nextIndex].classList.add('active');
  }, 1000);

  currentIndex = nextIndex;
});





//sec slider the card slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next-card').addEventListener('click', function () {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlidePosition();
});

document.querySelector('.prev-card').addEventListener('click', function () {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', function () {
    slideIndex = index;
    updateSlidePosition();
  });
});

function updateSlidePosition() {
  const sliderInner = document.querySelector('.slider-inner');
  sliderInner.style.transform = 'translateX(-' + slideIndex * 1350 + 'px)';

  dots.forEach((dot) => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

updateSlidePosition();
