var getHeight = $(".navbar").css("height");
getHeight = getHeight.replace("px", "");

//Set to scroll to top on refresh
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

// Resizes header and text upon scroll
$(window).scroll(function() {
	//Sizes header
	var scrollTop = $(document).scrollTop();
	var calcHeight = getHeight - scrollTop;
	$(".shrink").css("height", calcHeight);
	
	//Chevron visible/invisible	
	if (calcHeight < 280) {
		//380
		$(".chevron-top").hide();
	} else {
		$(".chevron-top").show();
	}
	
	//Chevron opacity
	var chevronOpacity = 1.5 - (getHeight - calcHeight)/100;
	$(".chevron-top").css("opacity", chevronOpacity);
});
	

//Smooth scrolling
$(function () {
	$("a[href*='#']:not([href='#'])").click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});