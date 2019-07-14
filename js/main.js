$(document).ready(function() {

	var pull = $('#nav__toggle');
	var menu = $('.nav ul');

	$(pull).on("click", function(e){
	    // cancel the standard behavior of the link
	    e.preventDefault();
	    // show/hide menu
	    menu.slideToggle();
	    // add modifier --active
	    $(this).toggleClass('nav__toggle--active');
	});
	// hide the menu when click on it on tablet and mobile
	$('nav.nav a').on("click", function(){
		fnstart();
	});
	// remove modifier and show/hide menu
	function fnstart(){	
		if ( $("#nav__toggle").hasClass("nav__toggle--active")  ) {
   			pull.toggleClass('nav__toggle--active');
			menu.slideToggle();
		}
	};
	// behavior from resize
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	        pull.removeClass('nav__toggle--active');
	    } else {

	    }
	    initPageScroll2Id();
	});

	// owlCarousel
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: ["",""],
		loop: true,
		navSpeed: 900,
		autoplay: true,
		autoplayTimeout: 15000,
		autoplaySpeed: 900
	});

	// pageScroll
	// add offset for mobile and tablet, and remove offset for desktop
	function initPageScroll2Id () {
		let windowWidth = $(window).width();
		if (windowWidth >= 992) {
		 	// desctop
		 	$("a[href*='#']").mPageScroll2id({
			highLightSelector: "nav a",
			offset: 0
			});
		} else {
		 	// tablet and mobile
		 	$("a[href*='#']").mPageScroll2id({
			highLightSelector: "nav a",
			offset: 60
			});
		}
	}
	initPageScroll2Id();

	// uitoTop
	var w = $(window).width();
	if (w >= 992){
		$().UItoTop({ easingType: 'easeOutQuart' });
	}
});