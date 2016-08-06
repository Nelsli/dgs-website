// Shrinking sticky header //

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
	var chevronOpacity = 1.5 - (maxHeight - calcHeight) / 100;
	$(".chevron-top").css("opacity", chevronOpacity);
}

//Set to scroll to top on refresh
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

$(window).on("load resize", function () {
	sizeHeader();
	sizeAboutPanels();
});

// Resizes header and text upon scroll
$(window).scroll(function () {
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


// Page scripts //

//Resize about us profiles to match > 768px
function sizeAboutPanels() {
	$(".about-wrap").height("auto");
	var docWidth = $(document).width();

	if (docWidth >= 768) {
		var phyllisHeight = $("#phyllis").height();
		var lindsayHeight = $("#lindsay").height();
		var highestDiv = Math.max(phyllisHeight, lindsayHeight);
		$(".about-wrap").height(highestDiv);
	} else {
		$(".about-wrap").height("auto");
	}
}

//Removes nav dropdown
$(window).on("click resize scroll", function () {
	$(".navbar-collapse.in").removeClass("in");
});

//Testimonial slider
$(document).ready(function() {
  var counter = 0;
  var $slider = $("#testimonial-content");
  var $sliderContent = $(".slider-content");

  $($sliderContent[0]).addClass("slider-active");

  var sliderBtnHtml = '<button type="button" class="slider-btn slider-previous" aria-label="Previous"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>';
	
  sliderBtnHtml += '<button type="button" class="slider-btn slider-next" aria-label="Next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>';

  $($slider).append(sliderBtnHtml);

  $(".slider-btn").click(function() {
      var lastValue = $sliderContent.length - 1;
      var showElement;
      $sliderContent.removeClass("slider-active");

      if ($(this).hasClass("slider-next")) {
        if (counter < lastValue) {
          counter += 1;
        } else {
          counter = 0;
        }
      } else {
        if (counter > 0) {
          counter -= 1;
        } else {
          counter = lastValue;
        }
      }

    showElement = $sliderContent[counter]; $(showElement).addClass("slider-active"); 
    $(".slider-active").show();
  });
});