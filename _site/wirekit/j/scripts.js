$(document).ready(function (){

	// track anchor clicks - share and downloads
	$('.clicktrack').click(function(){
		_gaq.push(['_trackEvent', 'Downloads', 'WireKit', $(this).attr('href')]);
	});

	// fade out header image on scroll
	$(window).scroll(function(e){

		var fromTop = $(window).scrollTop();
		$('.header img').css({
			'opacity' : 1-(fromTop/200)
		});

	});

	// demo switching
	var styleOne = $('.styleOne'),
		styleTwo = $('.styleTwo'),
		preview = $('.preview'),
		peek = $('.peek');

	styleOne.click(function(){

		preview.removeClass('demo-solid').addClass('demo-stroke');

		styleTwo.removeClass('selected');
		$(this).addClass('selected');

		peek.removeClass('solid');
		peek.addClass('stroke');
	});

	styleTwo.click(function(){

		preview.removeClass('demo-stroke').addClass('demo-solid');

		styleOne.removeClass('selected');
		$(this).addClass('selected');

		peek.removeClass('stroke');
		peek.addClass('solid');
	});

});