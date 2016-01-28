var getHeight = $(".navbar").css("height");
getHeight = getHeight.replace("px", "");

var headerH1Size = $("#nav-header").css("font-size");
var headerH1Number = headerH1Size.replace("em", "");


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

	//Changes parent font-size of #nav-header
	if (calcHeight > 210) {
		$("#nav-header-container").css("font-size", "14px")
	} else {
		$("#nav-header-container").css("font-size", "8px");
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