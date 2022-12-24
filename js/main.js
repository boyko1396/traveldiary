// link-moore
var linkMoore = document.querySelector('.js-link-moore');
var mooreContent = document.querySelector('.project-about__text');

linkMoore.addEventListener('click', function() {
  linkMoore.classList.toggle('is-hide');
  mooreContent.classList.add('is-show');
});

// header nav mobile
const btnNav = document.querySelector('.js-btn-nav');
const headerDropdown = document.querySelector('.header__dropdown');
const bodyNav = document.querySelector('body');

btnNav.addEventListener('click', function() {
  bodyNav.classList.toggle('is-menu-opened');
  btnNav.classList.toggle('is-active');
  headerDropdown.classList.toggle('is-show');
});

// scroll-up btn show
var targetItem = $('.intro__scroll-up');
var scrollShow = 600;
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= scrollShow) {
    targetItem.removeClass('is-hidden');
  } else {
    targetItem.addClass('is-hidden');
  }
});

// scroll target
$('.js-scroll-target').on('click', function (event){
  event.preventDefault();
  var scrollId = $(this).attr('href');
  var scrollHeightTop = $(scrollId).offset().top;
  $('body, html').animate({scrollTop: scrollHeightTop}, 650);
});

// project card
function clickHere(element){
  const containerOfProjectsComponent = element.getElementsByClassName('project-card__container')

  const delayTwo = async (ks) => await new Promise(resolve => setTimeout(resolve, ks));
  const actionWithDelayTwo = async () => {
    await delayTwo(50);
    containerOfProjectsComponent[0].scrollIntoView({ block: 'start', behavior: 'smooth'})
    containerOfProjectsComponent[0].classList.toggle('is-opened')
  }
  actionWithDelayTwo()
}