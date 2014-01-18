var container = $('.theSlideshow'),
	Slides = [
		"img/slides/s1.png",
		"img/slides/s2.png",
		"img/slides/s3.png"
	],
	i = 0;

	function simpleSlide(){
		if(i > Slides.length - 1){
			i = 0;
		}
		container.css({
			'opacity' : 0,
			'background-image' : 'url(' + Slides[i] + ')'
		}).animate({
			'opacity' : 1
		});
		i++;
	}
	var runIt = setInterval(simpleSlide, 4000);

