$(function(){
	var header = $('.header'),
		masthead = $('.masthead'),
		scrollNotice = $('.scroll-notice');

	// Make sure the `.masthead` is always centered
	function centerMasthead(){
		var mastheadHeight = masthead.height();
		masthead.css({
			"margin-top": "-" + (mastheadHeight / 2) + "px"
			});
		console.log('centering');
	};

	// When down arrow is clicked, scroll to content
	scrollNotice.click(function(){
		$('html, body').animate({
			scrollTop: $('.content-wrap').offset().top
		},800, "swing");
	});

	// Fade out arrow on scroll
	$(window).scroll(function(){
		var scrollDist = $(window).scrollTop();
		scrollNotice.css({
			"opacity" : 1 - (scrollDist / 600)
		});
	});

	centerMasthead();

	$(window).resize(function(){
		centerMasthead();
	});

});