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


	$('.upload input').change(function(event) {
		var value = $(this).val(),
				label = $(this).siblings('label');
		if (value != '') {
			label.html('Фотография успешно загружена.');
		}
	});

	$( "#tabs" ).tabs();

	$('.product__img').slick({
		// asNavFor: '.product__imgs',
		arrows: false
	});
	
	$('.product__imgs').slick({
		slidesToShow: 4,
		// asNavFor: '.product__img',
		// focusOnSelect: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 3
				}}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('#tabs a').click(function(event) {
		$('.product__img').slick('reinit');
		$('.product__imgs').slick('reinit');
	});

	$('.hum').click(function(event) {
		$(this).toggleClass('hum_toggle');
		$('.panel__nav').slideToggle(300);
	});

	$('.product__imgs').each(function(index, el) {
		var a = $(this).find('a');

		a.attr('data-fancybox', 'project-' + index);
	});
});