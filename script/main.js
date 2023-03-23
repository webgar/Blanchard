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
    },
  }
});

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
      slidesPerView: 3,
    },
  }
});