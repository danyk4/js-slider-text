'use strict';

let slideIndex = 0;

const textSlider = document.querySelectorAll('.text-slider');

carousel();

function carousel() {

  for (let i = 0; i < textSlider.length; i++) {
    textSlider[i].classList.remove('animate');
  }

  slideIndex++;

  if (slideIndex > textSlider.length) {
    slideIndex = 1;
  }

  textSlider[slideIndex - 1].classList.add('animate');
  setTimeout(carousel, 8000);
}
