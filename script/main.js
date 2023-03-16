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
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev'
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

document.querySelectorAll('a[href^="#gallery"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0; //document.querySelector('.gallery').offsetHeight
    // const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});