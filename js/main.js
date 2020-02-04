(function ($) {
"use strict";

/*===================================================
 Smooth scrolling using jQuery easing
==================================================== */

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: (target.offset().top - 50)
		}, 1000, "easeInOutExpo");
		return false;
	  }
	}
  });

  /*==============================================================
	Closes responsive menu when a scroll trigger link is clicked
  =================================================================== */

  $('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
  });

  /* ================================================================
   Activate scrollspy to add active class to navbar items on scroll
   ==================================================================== */
  $('body').scrollspy({
	target: '#mainNav',
	offset: 56
  });

  /* ====================================================
   			Sticky Menu JS
   ==================================================== */

	var sticky =$(".navbar");

	$(window).on('scroll', function() {

		var scroll = $(window).scrollTop();

		if(scroll < 50) {
			sticky.removeClass('sticky');
			$('.back-top').fadeIn(500);
		} else {
			sticky.addClass('sticky');
			$('.back-top').fadeIn(500);
		}
	});


/* ================================================
==== Slider Active ======
================================================= */

$('.slider-active').owlCarousel({
	loop:true,
	margin:0,
  	items:1,
  	autoplay:false,
	nav:true,
  	navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
  	dots:false,
  	autoplayHoverPause: false,
  	autoplaySpeed: 800,
	responsive:{
		0:{
			items:1,
			nav:true,
		},
		767:{
			items:1,
			nav:true,
		},
		992:{
			items:1,
			nav:true
		},
		1200:{
			items:1,
			nav:true
		},
		1600:{
			items:1,
			nav:true
		}
	}
});

/* ================================================
==== Slider Active ======
================================================= */

$('.financial-active').owlCarousel({
	loop:true,
	margin:0,
  	items:1,
  	autoplay:false,
	nav:true,
  	navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
  	dots:false,
  	autoplayHoverPause: false,
  	autoplaySpeed: 800,
	responsive:{
		0:{
			items:1,
			nav:true,
		},
		767:{
			items:1,
			nav:true,
		},
		992:{
			items:1,
			nav:true
		},
		1200:{
			items:1,
			nav:true
		},
		1600:{
			items:1,
			nav:true
		}
	}
});

/* ============================================
 Counter Up JS
 ============================================ */
 
 $('.counter').counterUp({
	delay: 10,
	time: 10000,
});

/* ==============================
 wow js
 ============================== */

new WOW().init();

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	