function adjustAboutUsHeight() {
	var $phyllis = $("#phyllis");
	var $lindsay = $("#lindsay");
	$("#phyllis").attr("height","");
	$("#lindsay").attr("height","");
	var phyllisHeight = $phyllis.css("height");
	var lindsayHeight = $lindsay.css("height");
	
	if (phyllisHeight < lindsayHeight) {
		$phyllis.css("height", lindsayHeight);
	} else if (phyllisHeight > lindsayHeight) {
		$lindsay.css("height", phyllisHeight);
	}
}

$(window).on("click resize scroll", function() {
	$(".navbar-collapse.in").removeClass("in");
});

$(window).on("load resize", function() {
	var docWidth = $(document).width();
	if (docWidth >= 768) {
		adjustAboutUsHeight();
	}
});