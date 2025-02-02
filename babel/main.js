const reviews = document.querySelectorAll('.review');
const reviewsBg = document.querySelectorAll('.review-bg');
const reviews2 = document.querySelectorAll('.review2');
const reviews2Bg = document.querySelectorAll('.review2-bg');
const header = document.querySelector('.header');
const catalog = document.querySelector('.catalog');
const catalogBurgerBtn = document.querySelector('.catalog-burger-btn');
const catalogBtn = document.querySelector('.catalog-btn');
const menuBtns = document.querySelectorAll('.menu-btn');
const toCatalogBtns = document.querySelectorAll('.to-catalog-btn');

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

if (header) {
  const position = () => {
    const headerHeight = header.getBoundingClientRect().height;
    document.body.style.paddingTop = headerHeight + 16 + 'px';
  };
  position();
  window.addEventListener('resize', position);
}

if (catalog && header) {
  const activeCategory = null;
  const catalogPos = () => {
    const headerHeight = header.getBoundingClientRect().height - 4;
    catalog.style.top = headerHeight + 'px';
  }
  catalogPos();
  window.addEventListener('resize', catalogPos);

  const categories = catalog.querySelectorAll('.catalog__category-item');
  categories.forEach((category, index) => {
    const btn = category.querySelector('.catalog__category-btn');
    const wrapOpen = () => {
      categories.forEach((category2, index2) => {
        if (index !== index2) {
          category2.classList.remove('_active');
        }
      });
      category.classList.toggle('_active');

      if (window.innerWidth >= 990) {
        catalog.scrollTop = 0;
      }
    }
    
    btn.addEventListener('click', wrapOpen);
  });
}

if (catalogBtn || catalogBurgerBtn) {
  let prevActiveMenuBtn = null;
  menuBtns.forEach((btn, index) => {
    if (btn.classList.contains('_active')) {
      prevActiveMenuBtn = index;
    }
  });
  catalogBtn.addEventListener('click', () => {
    catalog.scrollTop = 0;

    catalog.classList.toggle('_active');
    catalogBtn.classList.toggle('_active');
    document.body.classList.toggle('no-scroll');

    if (catalog.classList.contains('_active')) {
      menuBtns[prevActiveMenuBtn].classList.remove('_active');
    } else {
      menuBtns[prevActiveMenuBtn].classList.add('_active');
    }
  });
  catalogBurgerBtn.addEventListener('click', () => {
    catalog.classList.toggle('_active');
    catalogBurgerBtn.classList.toggle('_active');
    document.body.classList.toggle('no-scroll');
  });
}

toCatalogBtns.forEach((btn) => {
  catalog.scrollTop = 0;
  let prevActiveMenuBtn = null;
  menuBtns.forEach((btn, index) => {
    if (btn.classList.contains('_active')) {
      prevActiveMenuBtn = index;
    }
  });

  btn.addEventListener('click', () => {

    catalog.classList.add('_active');
    catalogBtn.classList.add('_active');
    catalogBurgerBtn.classList.add('_active');
    document.body.classList.add('no-scroll');

    if (catalog.classList.contains('_active')) {
      menuBtns[prevActiveMenuBtn].classList.remove('_active');
    } else {
      menuBtns[prevActiveMenuBtn].classList.add('_active');
    }
  });
})