const reviews = document.querySelectorAll('.review');
const reviewsBg = document.querySelectorAll('.review-bg');
const reviews2 = document.querySelectorAll('.review2');
const reviews2Bg = document.querySelectorAll('.review2-bg');

reviews.forEach((review, index) => {
  const fullBtn = review.querySelector('.review__full-btn');
  const bg = reviewsBg[index];

  fullBtn.addEventListener('click', () => {
    review.classList.toggle('_full');
  });

  const bgPos = () => {
    let reviewX = 
      review.getBoundingClientRect().left -
      bg.parentElement.getBoundingClientRect().left;
    let reviewY = 
      review.getBoundingClientRect().top -
      bg.parentElement.getBoundingClientRect().top;
    let reviewWidth = review.getBoundingClientRect().width;
    let reviewHeight = review.getBoundingClientRect().height;

    bg.style.left = reviewX + reviewWidth / 2 + 'px';
    bg.style.top = reviewY + reviewHeight / 2 + 'px';
    
  };
  bgPos();
  window.addEventListener('resize', bgPos);
});

reviews2.forEach((review2, index) => {
  const fullBtn = review2.querySelector('.review2__full-btn');
  const bg = reviews2Bg[index];

  fullBtn.addEventListener('click', () => {
    review2.classList.toggle('_full');
  });

  const bgPos = () => {
    let reviewX = 
      review2.getBoundingClientRect().left -
      bg.parentElement.getBoundingClientRect().left;
    let reviewY = 
      review2.getBoundingClientRect().top -
      bg.parentElement.getBoundingClientRect().top;
    let reviewWidth = review2.getBoundingClientRect().width;
    let reviewHeight = review2.getBoundingClientRect().height;

    bg.style.left = reviewX + reviewWidth / 2 + 'px';
    bg.style.top = reviewY + reviewHeight / 2 + 'px';
    
  };
  bgPos();
  window.addEventListener('resize', bgPos);
});