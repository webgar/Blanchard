//Меню
$(function () {
  var navMenu = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.header-bottom__menu');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  navMenu.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.dropdown').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new navMenu($('#dropDownMenu'), false);


  
});


//Слайдер
const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  effect: 'fade',

  autoplay: {
    delay: 5000,
  }  
});

//Custom select Choices 

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  placeholder: false,
  itemSelectText: '',
});

//Слайдер галерии


const swiperGallery = new Swiper('.gallery__swiper', {

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev'
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction'   
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: true,
    disableOnInteraction: false
  },
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  }
});
  
//Modal gallery

let modalBg = document.querySelector('.overlay'); // Фон попап окна
let modal = document.querySelector('.modal'); // Само окно
let gallerySlide = document.querySelectorAll('.gallery__slider-img'); // Кнопки для показа окна
let closeModalButton = document.querySelector('.modal__close'); // Кнопка для скрытия окна

gallerySlide.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    modalBg.classList.add('active'); // Добавляем класс 'active' для фона
    modal.classList.add('active'); // И для самого окна
  })
});
closeModalButton.addEventListener('click', () => { // Вешаем обработчик на крестик
  modalBg.classList.remove('active'); // Убираем активный класс с фона
  modal.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if (e.target === modalBg) { // Если цель клика - фот, то:
    modalBg.classList.remove('active'); // Убираем активный класс с фона
    modal.classList.remove('active'); // И с окна
  }
});

//Tabs

const allTabBtns = document.querySelectorAll('.content-right__link');

allTabBtns.forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {

    // event.preventDefault();//Отменяем клик ссылке

    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.content-left__item').forEach(function (tabContent) {
      tabContent.classList.remove('content-left__item_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('content-left__item_active')

  })
})

//Accordion
$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    icons: { "header": false, 
    "activeHeader": false 
  },
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $
        (target).offset().top
    }, 800);
    return false;
  })
})

//Слайдер события


const swiperEvents = new Swiper('.events__swiper', {

  navigation: {
    nextEl: '.cards-items__button-next',
    prevEl: '.cards-items__button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 50,
  simulateTouch: false,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});
//Слайдер Projects
const swiperProjects = new Swiper('.projects__swiper', {

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev'
  },
  pagination: {
    el: '.cards-items__swiper-pagination',
    type: 'fraction'
  },
  slidesPerView: 3,
  spaceBetween: 50,
  simulateTouch: true,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  }
});

//Form
var selector = document.getElementById("phone");

var im = new Inputmask("+999(99)-999-99-99");
im.mask(selector);

const validator = new JustValidate('#form');

validator
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Как вас зовут',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
  ]);
  // Yandex Map
ymaps.ready(init);
  function init() {
   
    var myMap = new ymaps.Map("map", {
      center: [55.758471093889874, 37.6058091878661],
      zoom: 14
    });
  
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/mark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  }


document.addEventListener('DOMContentLoaded', () => {

  const search = document.querySelector('.search-mobile');
  const searchBtn = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-mobile__input');
  const searchClose = document.querySelector('.search-mobile__close');

  // search Лупа

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.classList.add('search-mobile__input--active');
    search.classList.add('search-active');
    searchClose.classList.add('search-mobile__close-active');
  })

  searchClose.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.classList.remove('search-mobile__input--active');
    search.classList.remove('search-active');
    searchClose.classList.remove('search-mobile__close-active');
  })

  window.addEventListener('click', (event) => {
    if (!search.contains(event.target)) searchInput.classList.remove('search-mobile__input--active');
    if (!search.contains(event.target)) search.classList.remove('search-active');
    if (!search.contains(event.target)) searchClose.classList.remove('search-mobile__close-active');
  });



});


 // Burger
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

$(document).ready(function () {
  $('#burger').click(function () {
    $(this).toggleClass('close');
  })
})

//More btn
function readMore() {
  var dots = document.getElementById("dots");
  var moreBtn = document.getElementById("moreBtn");
  var more = document.getElementById("more");

  if(dots.style.display === "none") {
    dots.style.display="inline";
    moreBtn.style.display = "Подробнее";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    moreBtn.innerHTML= "Скрыть";
    more.style.display = "inline";
  }
}

