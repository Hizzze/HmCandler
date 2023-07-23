const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.header__menu-list')
menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('header__menu-active')
});

const swiperOne = new Swiper('.feedback__swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2,
		effects: true
	});

}
const swiperTwo = new Swiper('.certificates__swiper', {
  loop: true,
	slidesPerView: 3,
	spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
	breakpoints: {
		640: {
			slidesPerView: 3,
		},
		480: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
		}
	},

});



const accordeon = document.querySelector('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__title');


accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
	accordeonTitle.addEventListener('click', function () {
		const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
		
		accordeonTitle.classList.toggle('accordeon__title--active');
		currentText.classList.toggle('accordeon__text--visible');

		if(currentText.classList.contains('accordeon__text--visible')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px'
		} else {
			currentText.style.maxHeight = null;
		}


	})
});