( function( window ) {

	// Define main variables

	var home = document.getElementById('home');

	var menuButton = document.getElementById('menu'),
		$overlay = $('#overlay'),
		$menu = $('#st-container'),
		menuBool = false;

	// Menu buttons

	var $homeButton = $('#homeButton'),
		$aboutButton = $('#aboutButton'),
		$skillButton = $('#skillButton'),
		$workButton = $('#workButton'),
		$funButton = $('#funButton'),
		$feedbackButton = $('#feedbackButton'),
		$contactButton = $('#contactButton');

	// Tooltip and scroll button in the first section

	var $scrollButton = $('#scrollButton'),
		$tooltip = $('#tooltip');

	// All the website's section

	var $secondSection = $('#second'),
		$thirdSection = $('#third'),
		$fourthSection = $('#fourth'),
		$fifthSection = $('#fifth'),
		$sixthSection = $('#sixth'),
		$seventhSection = $('#seventh');

	var $skillbar = $('.skillbar');

	// Add overlay's main class

	$overlay.addClass('hide');

	// Function to customize typewriter animated element

	$(function(){
        $(".element").typed({
            strings: ["Hello There", "My name's Mohamad Moudallal", "I'm an iOS Developer...", "a Front-End Developer...", "and a UI Designer."],
            typeSpeed: 70,
            loop: true,
            loopCount: false
        });
    });

	// Hide menu and overlay function

	var hide = function(){

		$menu.animate({
			right: "-300"
		}, 200);

		$overlay.fadeOut(200, function(){
			// Animation complete
			$overlay.removeClass('show');
			$overlay.addClass('hide');
		});

		menuBool = false;

	}

	// Scroll to section given in the function's parameter

	var display = function(section){

		$('html, body').animate({scrollTop: section.offset().top}, 1000);

	};

	// Function executed when the logo has been clicked

	home.onclick = function(){

		$('html, body').animate({scrollTop: 0}, 500);

	};

	// Function executed when the menu has been clicked

	menuButton.onclick = function(){

		$menu.animate({
			right: "0"
		}, 200);

		$overlay.animate({
			opacity: 0.6
		}, 200);

		$overlay.removeClass('hide');
		$overlay.addClass('show');

		

		menuBool = true;

	};

	// Function executed when the overlay has been clicked

	$overlay.click(function() {

		hide();

	});

	// Functions exexcuted when links in the menu are clicked

	$homeButton.click(function() {

		$('html, body').animate({scrollTop: 0}, 500);
		hide();

	});

	$aboutButton.click(function() {

		display($secondSection);
		hide();

	});

	$skillButton.click(function() {

		display($thirdSection);
		hide();

	});

	$workButton.click(function() {

		display($fourthSection);
		hide();

	});

	$funButton.click(function() {

		display($fifthSection);
		hide();

	});

	$feedbackButton.click(function() {

		display($sixthSection);
		hide();

	});

	$contactButton.click(function () {

		display($seventhSection);
		hide();

	});

	// Function executed when the down arrow has been clicked

	$scrollButton.click(function() {

		display($secondSection);

	});

	// Function executed when the mouse enters the down arrow

	$scrollButton.mouseenter(function(){

		$scrollButton.animate({
			opacity: 1,
			top: "-=0.5vh"
		}, 150, function() {
			// Animation complete.
			$scrollButton.delay(300);
		});

		$tooltip.animate({
			opacity: 1,
			top: "-=0.5vh"
		}, 150, function() {
			// Animation complete.
			$tooltip.delay(300);
		});

	});

	// Function executed when the mouse leaves the down arrow

	$scrollButton.mouseleave(function(){

		$scrollButton.animate({
			opacity: 0.6,
			top: "+=0.5vh"
		}, 150, function() {
			// Animation complete.
			$scrollButton.delay(300);
		});

		$tooltip.animate({
			opacity: 0,
			top: "+=0.5vh"
		}, 150, function() {
			// Animation complete.
			$tooltip.delay(300);
		});

	});

	// Animation function for the skills section

	$skillbar.each(function() {

		$(this).appear(function() {

			$(this).find('.title').animate({
				opacity: 1
			}, 1500);

			$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
			},3000);

			var percent = $(this).attr('data-percent');
			$(this).find('.count').html('<span>' + percent + '</span>');

		});

	});

	// Function for getting the current year

	var getYear = function(){

		var today = new Date(),
			year = today.getFullYear();

		return year;

	}

	// Assign the current year to the html content in the footer

	$(document).find('.currentYear').html('<span>' + getYear() + '</span>');

})( window );
