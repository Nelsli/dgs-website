var maxHeight;
var minHeight;

function getHeaderHeight() {
	maxHeight = $(".navbar").css("max-height");
	maxHeight = maxHeight.replace("px", "");
	
	minHeight = $("nav.navbar").css("min-height");
	minHeight = minHeight.replace("px", "");
}

function sizeHeader() {
	getHeaderHeight();
	//Sizes header
	var scrollTop = $(document).scrollTop();
	var calcHeight = maxHeight - scrollTop;
			
	$(".shrink").css("height", calcHeight);
	
	//Chevron visible/invisible	
	if (calcHeight < 280) {
		$(".chevron-top").hide();
	} else {
		$(".chevron-top").show();
	}
	
	//Chevron opacity
	var chevronOpacity = 1.5 - (maxHeight - calcHeight)/100;
	$(".chevron-top").css("opacity", chevronOpacity);
}

//Set to scroll to top on refresh
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

$(window).on("load resize", function() {
//		getHeaderHeight();
		sizeHeader();
});

// Resizes header and text upon scroll
$(window).scroll(function() {
	sizeHeader();	
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