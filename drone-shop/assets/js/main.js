// Swiper Slider
const swiper = new Swiper('.product__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
});

/* ========== VIDEO ========== */
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon');

const playPause = () => {
  if (videoFile.paused) {
    // Play video
    videoFile.play();

    // Change the icon
    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');
  } else {
    // Pause video
    videoFile.pause();

    // We change the icon
    videoIcon.classList.add('ri-play-line');
    videoIcon.classList.remove('ri-pause-line');
  }
};

videoButton.addEventListener('click', playPause);

/* ========== CHAMGE BACKGROUND HEADER ========== */
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
};

window.addEventListener('scroll', scrollHeader);
