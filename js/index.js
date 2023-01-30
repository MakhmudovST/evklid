// Слайдер
new Swiper('.section-hero__swiper', {

  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,
    // Динамическеи буллеты
  },

  simulateTouch: false,

  autoplay: {
    delay: 3000,
    // автопрокрутка продолжается после касаяния
    disableOnInteraction: false,
  },

  loop: true,
})

// Табы
const TabButtons = document.querySelectorAll('[data-tab]'),
      TabContent = document.querySelectorAll('[data-tab-content]');

TabButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    // Кнопки
    TabButtons.forEach(function(item) {
      item.classList.remove('how-we-work-active');
    })
    item.classList.add('how-we-work-active');

    // Контент
    TabContent.forEach(function(item) {
      item.classList.add('hidden')
    })
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');
  })
})

// Аккордеон
const accordion = document.querySelectorAll('.questions__list-item');
accordion.forEach(function(item) {
  item.addEventListener('click', function () {

    if(this.classList.contains('active')){

      this.classList.remove('active');

    } else {
    accordion.forEach(function(item) {
      item.classList.remove('active');
    })

    this.classList.add('active');
    }
  })
})

// бургер
const navBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.header__mobile-nav');
const body = document.body;
const headerLink = document.querySelectorAll('.header__text-link');
const burger = function() {
  mobileNav.classList.toggle('active');
  navBtn.classList.toggle('close');
  body.classList.toggle('no-scroll');
}

navBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  burger();
})

window.addEventListener('click', function(){
  if (body.classList.contains('no-scroll')) {
    burger();
  }
})

mobileNav.addEventListener('click', function (event) {
  event.stopPropagation();
})

headerLink.forEach(function(item) {
  item.addEventListener('click', function() {
    burger();
  })
})

// поле поиска
const btnSearch = document.querySelector('.header__search');
const searchBox = document.querySelector('.header__search-box');
const searchTxt = document.querySelector('.header__search-txt');
const btnClose = document.querySelector('.header__closed-search');

btnSearch.addEventListener('click', function() {
  searchBox.classList.add('active');
  searchTxt.classList.add('active');
  btnClose.classList.add('active');
  btnSearch.classList.add('active');
})

btnClose.addEventListener('click', function() {
  searchBox.classList.remove('active');
  searchTxt.classList.remove('active');
  btnClose.classList.remove('active');
  btnSearch.classList.remove('active');
})

