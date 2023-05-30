function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let numberSlid = 0;

  function toggleArrows() {
    if (numberSlid === 0) {
      buttonLeft.style.display = 'none';
    } else {
      buttonLeft.style.display = '';
    }

    if (numberSlid === 3) {
      buttonRight.style.display = 'none';
    } else {
      buttonRight.style.display = '';
    }
  }

  function flipSlide(direction) {
    if (direction === 'right' && numberSlid < 3) {
      numberSlid++;
      carouselInner.style.transform = `translateX(-${slideWidth * numberSlid}px)`;
    } else if (direction === 'left' && numberSlid > 0) {
      numberSlid--;
      carouselInner.style.transform = `translateX(-${slideWidth * numberSlid}px)`;
    }
    toggleArrows();
  }
  
  buttonLeft.addEventListener('click', () => flipSlide('left'));
  buttonRight.addEventListener('click', () => flipSlide('right'));
  
  toggleArrows();
}