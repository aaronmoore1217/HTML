$(function () {
	$(window).on("scroll",
		function () {
			if ($(document).scrollTop() > 1) {
				$("nav").animate({ backgroundColor: jQuery.Color("rgb(32, 32, 32)") }, { queue: false });
			}
			else {
				$("nav").animate({ backgroundColor: "transparent" }, { queue: false });
			}
		});
});