const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   initialSlide:'0',
   slidesPerView: '1',
   effect: 'slide',
   centeredSlides: 'true',
   speed: 800,
   spaceBetween: 20,
   breakpoints: {
      902: {
         slidesPerView: 3,
         spaceBetween: 30,
         centeredSlides: 'true',
      }},
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

// video block
let videos = document.querySelectorAll('iframe');
let choisers = document.querySelectorAll('.videoblock-item-choise');
let main = document.querySelector('.featured__videoblock-main');

let videoBlock = document.querySelector('.featured__videoblock-videos');

for (i=0; i<choisers.length; i++){
   let choiser = choisers[i];
   choiser.addEventListener('click', function(event){
      let mainVideo = main.firstElementChild;
      mainVideo.remove();
      let block = choiser.parentElement;
      let video = block.firstElementChild;
      let choisedVideo = video.cloneNode(true);
      choisedVideo.classList.add('video-active');
      main.append(choisedVideo);
      event.preventDefault;
   })
};

//slider2
const swiper2 = new Swiper('.swiper2', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 10,
   speed: 800,
   centeredSlides: 'true',
   breakpoints: {
      551: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      650: {
         slidesPerView: 3,
         spaceBetween: 15,
      },
      750: {
         slidesPerView: 4,
         spaceBetween: 20,
      },
      900: {
         slidesPerView: 5,
         spaceBetween: 30,
      }},
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

//swiper 3

const swiper3 = new Swiper('.swiper3', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   slidesPerView: 1,
   spaceBetween: 0,
   speed: 800,
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

//Burger-menu
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header-burger');
let body = document.body;

burger.addEventListener('click', function(){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
})
