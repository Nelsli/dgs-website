////Email address
//var checkText = $(".email").html();
//var emailArray = ["co", "nt", "act", "@", "dgs", "gr", "ants", ".", "com"];
//var fullEmail = "";
//var emailText = "";
//
//for (var i = 0; i < emailArray.length; i++) {
//	fullEmail += emailArray[i];
//}
//
//var emailHtml = "<a href='mailto:'" + fullEmail + ">" + fullEmail + "</a>";
//
//$("span.email").html(emailHtml);
//$("button.email").attr("href", "mailto:" + fullEmail);

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