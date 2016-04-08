function adjustAboutUsHeight() {
	$("#phyllis", "#lindsay").css("height", "auto");
	
	var $phyllis = $("#phyllis");
	var $lindsay = $("#lindsay");
	
	var phyllisHeight = $phyllis.css("height");
	console.log("P" + phyllisHeight);
	var lindsayHeight = $lindsay.css("height");
	console.log("L" + lindsayHeight);
	
	if (phyllisHeight < lindsayHeight) {
		$phyllis.css("height", lindsayHeight);
	} else if (phyllisHeight > lindsayHeight) {
		$lindsay.css("height", phyllisHeight);
	}
}

$(window).on("load resize", function() {
	var docWidth = $(document).width();
	
	if (docWidth >= 768) {
		adjustAboutUsHeight();
	} else {
		$("#phyllis", "#lindsay").attr("height", "");
	}
});

$(window).on("click resize scroll", function() {
	$(".navbar-collapse.in").removeClass("in");
});
