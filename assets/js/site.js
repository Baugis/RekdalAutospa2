/** RESPONSIVE VIDEOS (YouTube & Vimeo) */
$(".content").fitVids();	

/** ANIMATED SCROLL TO ANCHOR */
// Animated scroll to Anchor except for links that should open a modal (data-lity)
$('a[href^="#"]:not([data-lity])').on('click',function (e) {
	e.preventDefault();
	var target = this.hash;
	var $target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 900, 'swing', function () {
		window.location.hash = target;
	});
});

/** ADD CLASSES WHEN SCROLLING */
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();    
	if (scroll >= 1 * $(window).height()) {
		$('#header').addClass( "scrolled" );
		$('#at-share-dock').addClass( "scrolled" );
	} else {
		$('#header').removeClass( "scrolled" );
		$('#at-share-dock').removeClass( "scrolled" );
	}
});	

/** ACTIVATE SWIPERS */
$('.block-swiper .swiper-container').each(function (index) {
	var slideCount = $(this).find('.swiper-slide').length;
	$(this).addClass('slides-' + slideCount );
	if (slideCount > 1 ) {
		var mySwiper = new Swiper($(this)[0],{
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
			pagination:{
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},
		});
	}
});

/** ACTIVATE MIXITUPS */
$('.mixitup').each(function (index) {
	var containerEl = $(this);
	var mixer = mixitup(containerEl, {
		multifilter: {
			enable: true
		},
		controls: {
			scope: 'local'
		}
	});
});

/** CHANGE NAVBAR BEHAVIOR TO DOUBLE CLICK ON PARENT LINK */
$('.navbar .dropdown > a').click(function() {
	if (!$(this).hasClass("parent-clicked")) {
		$(this).addClass("parent-clicked");
	} else {
		location.href = this.href;
	}
});