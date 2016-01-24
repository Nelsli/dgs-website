var getHeight = $(".navbar").css("height");
getHeight = getHeight.replace("px", "");

var h1Size = $("#nav-header").css("font-size");
//h1Size = h1Size.replace("px", "");

$("#nav-header").css("top", "190px");

//Set to scroll to top on refresh
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

//Shrinks header on scroll and repositions text
$(window).scroll(function () {
	var scrollTop = $(document).scrollTop();
	var calcHeight = getHeight - scrollTop;
	var h1Position = 0.5 * calcHeight;
	
	if (h1Position <= 0) {
		$("#nav-header").css("top", "0px");
	} else {
		$("#nav-header").css("top", h1Position + "px");
	}
	$(".shrink").css("height", calcHeight);
	
	if (calcHeight < 200) { 
		h1Size = $("#nav-header").css("font-size", "40px");
	} else {
		h1Size = $("#nav-header").css("font-size", "60px")
	}
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