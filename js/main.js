"use strict";

var reviews = document.querySelectorAll('.review');
var reviewsBg = document.querySelectorAll('.review-bg');
var reviews2 = document.querySelectorAll('.review2');
var reviews2Bg = document.querySelectorAll('.review2-bg');
var header = document.querySelector('.header');
var catalog = document.querySelector('.catalog');
var catalogBurgerBtn = document.querySelector('.catalog-burger-btn');
var catalogBtn = document.querySelector('.catalog-btn');
var menuBtns = document.querySelectorAll('.menu-btn');
var toCatalogBtns = document.querySelectorAll('.to-catalog-btn');
reviews.forEach(function (review, index) {
  var fullBtn = review.querySelector('.review__full-btn');
  var bg = reviewsBg[index];
  fullBtn.addEventListener('click', function () {
    review.classList.toggle('_full');
  });
  var bgPos = function bgPos() {
    var reviewX = review.getBoundingClientRect().left - bg.parentElement.getBoundingClientRect().left;
    var reviewY = review.getBoundingClientRect().top - bg.parentElement.getBoundingClientRect().top;
    var reviewWidth = review.getBoundingClientRect().width;
    var reviewHeight = review.getBoundingClientRect().height;
    bg.style.left = reviewX + reviewWidth / 2 + 'px';
    bg.style.top = reviewY + reviewHeight / 2 + 'px';
  };
  bgPos();
  window.addEventListener('resize', bgPos);
});
reviews2.forEach(function (review2, index) {
  var fullBtn = review2.querySelector('.review2__full-btn');
  var bg = reviews2Bg[index];
  fullBtn.addEventListener('click', function () {
    review2.classList.toggle('_full');
  });
  var bgPos = function bgPos() {
    var reviewX = review2.getBoundingClientRect().left - bg.parentElement.getBoundingClientRect().left;
    var reviewY = review2.getBoundingClientRect().top - bg.parentElement.getBoundingClientRect().top;
    var reviewWidth = review2.getBoundingClientRect().width;
    var reviewHeight = review2.getBoundingClientRect().height;
    bg.style.left = reviewX + reviewWidth / 2 + 'px';
    bg.style.top = reviewY + reviewHeight / 2 + 'px';
  };
  bgPos();
  window.addEventListener('resize', bgPos);
});
if (header) {
  var position = function position() {
    var headerHeight = header.getBoundingClientRect().height;
    document.body.style.paddingTop = headerHeight + 16 + 'px';
  };
  position();
  window.addEventListener('resize', position);
}
if (catalog && header) {
  var activeCategory = null;
  var catalogPos = function catalogPos() {
    var headerHeight = header.getBoundingClientRect().height - 4;
    catalog.style.top = headerHeight + 'px';
  };
  catalogPos();
  window.addEventListener('resize', catalogPos);
  var categories = catalog.querySelectorAll('.catalog__category-item');
  categories.forEach(function (category, index) {
    var btn = category.querySelector('.catalog__category-btn');
    var wrapOpen = function wrapOpen() {
      categories.forEach(function (category2, index2) {
        if (index !== index2) {
          category2.classList.remove('_active');
        }
      });
      category.classList.toggle('_active');
      if (window.innerWidth >= 990) {
        catalog.scrollTop = 0;
      }
    };
    btn.addEventListener('click', wrapOpen);
  });
}
if (catalogBtn || catalogBurgerBtn) {
  var prevActiveMenuBtn = null;
  menuBtns.forEach(function (btn, index) {
    if (btn.classList.contains('_active')) {
      prevActiveMenuBtn = index;
    }
  });
  catalogBtn.addEventListener('click', function () {
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
  catalogBurgerBtn.addEventListener('click', function () {
    catalog.classList.toggle('_active');
    catalogBurgerBtn.classList.toggle('_active');
    document.body.classList.toggle('no-scroll');
  });
}
toCatalogBtns.forEach(function (btn) {
  catalog.scrollTop = 0;
  var prevActiveMenuBtn = null;
  menuBtns.forEach(function (btn, index) {
    if (btn.classList.contains('_active')) {
      prevActiveMenuBtn = index;
    }
  });
  btn.addEventListener('click', function () {
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
});
//# sourceMappingURL=main.js.map
