//Resize about us profiles to match > 768px
$(window).on("load resize", function () {
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
});

$(window).on("click resize scroll", function () {
	$(".navbar-collapse.in").removeClass("in");
});

//Testimonial slider
var testimonials = $(".testimonial").clone();

$("#slider-panel").append(testimonials);

var $testimonials = $("#slider .testimonial");
$testimonials.addClass("vert-center");
var counter = 0;

$(".slider-btn").click(function() {
  $("#slider .testimonial").removeClass("active");
  var lastValue = $testimonials.length - 1;
  
  if ($(this).hasClass("next")) {
    
    if (counter < lastValue) {
      counter += 1;
    } else {
      counter = 0;
    }
    
  } else {
    
    if (counter > 0) {
      counter -=1;
    } else {
      counter = lastValue;
    }    
    
  }
  
  var showElement = $testimonials[counter];
  $(showElement).addClass("active");
});




