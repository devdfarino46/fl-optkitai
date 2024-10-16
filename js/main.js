const reviews = document.querySelector('.reviews');

if (reviews) {
  const reviewItems = reviews.querySelectorAll('.review');
  const pagination = reviews.querySelector('.reviews__pagination');
  const navBtns = reviews.querySelectorAll('.reviews__nav-btn');

  const reviewsSwiper = new Swiper(reviews.querySelector('.swiper'), {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    direction: 'horizontal',
    allowTouchMove: false,

    pagination: {
      el: pagination,
      clickable: true
    },

    navigation: {
      nextEl: navBtns[1],
      prevEl: navBtns[0]
    }
  })

  reviewItems.forEach(review => {
    const images = review.querySelector('.review__images');
    const content = review.querySelector('.review__content');
    const imagesBtns = review.querySelectorAll('.review__images-btn');
    const contentFullBtn = review.querySelector('.review__content-full-btn');

    const IMAGES_WIDTH = content.clientWidth;
    const IMAGE_WIDTH = 120;
    
    images.style.width = IMAGES_WIDTH + 'px';

    
    const imagesSwiper = new Swiper(images.querySelector('.swiper'), {
      slidesPerView: Math.floor(IMAGES_WIDTH / IMAGE_WIDTH),
      spaceBetween: 13,
      direction: 'horizontal',
      allowTouchMove: false,

      navigation: {
        nextEl: imagesBtns[1],
        prevEl: imagesBtns[0]
      }
    });

    contentFullBtn.addEventListener('click', () => {
      content.style.maxHeight = 'none';
      contentFullBtn.style.display = 'none';
      images.style.display = 'flex';
    });

    window.addEventListener('resize', () => {
      // images.style.width = 1 + 'px';
      images.style.width = content.clientWidth + 'px';
      imagesSwiper.slidesPerView = Math.floor(images.style.width / IMAGE_WIDTH);
      imagesSwiper.update();
    });
  });
}