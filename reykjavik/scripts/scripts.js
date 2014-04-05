$( document ).ready(function() {

// Vars
	var go = $('.go-go-scroll'),
		lastStep = $('.last-step'),
		hero = $('.hero'),
		documentHeight = $(document).height(),
		lastFrameOffset = $('.frame.last').offset().top,
		finishFrame = $('.finish').offset().top;

// Go Go Gadget Scroller
	go.click(function(){
		$("html, body").animate({
			scrollTop: lastFrameOffset + 'px'
		}, 800, "swing");
		return false;
		return false;
	});

// When last frame is reached, and scroll clicked, scroll down to finish frame
	lastStep.click(function(){
		$("html, body").animate({
			scrollTop: finishFrame
		},800, "swing")
	});

// Always vertically center `hero`
	function centerHero(){
		var heroHeight = hero.height();
		hero.css({
			"margin-top" : "-" + (heroHeight / 2) + "px"
		})
	}

//	Run on page ready
	centerHero();

//	Run on page resize
	$(window).resize(function(){
		centerHero();
	})

});