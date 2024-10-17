const reviews = document.querySelectorAll('.review');
const reviewsBg = document.querySelectorAll('.review-bg');

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