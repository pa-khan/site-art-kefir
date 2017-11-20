$(document).ready(function($) {

	/* Phone mask */
	$('.input.input_phone').mask('+7 (999) 999-99-99');
	

	$('.reviews__list').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrows"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrows"><i class="icon icon-arrow-right"></i></button>'
	})

	$('.callback__arrow, .callback__link span').click(function(event) {
		var parent = $(this).parents('.callback'),
				wrap = parent.find('.callback__wrap'),
				link = parent.find('.callback__link'),
				arrow = parent.find('.callback__arrow');

		arrow.toggleClass('callback__arrow_rotate');
		wrap.slideToggle(300);
		link.slideToggle(100);
	});


	$('.form__button').click(function(event) {
		$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
		
	});


	var header = $('.header'),
			navFixed = $('.nav-fixed');

	$(window).on('load resize scroll', function(event) {
		var windowScroll = $(window).scrollTop(),
				headerHeight = header.height();
		if (windowScroll > headerHeight) {
			navFixed.addClass('nav-fixed_show');
		} else {
			navFixed.removeClass('nav-fixed_show');
		}
	});
});