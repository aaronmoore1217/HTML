$(function() {
    $(window).on("scroll", 
	function() {
      	if ($(document).scrollTop() > 1) {
        	$("nav").animate({backgroundColor: jQuery.Color( "slategrey" )}, {queue: false});
      	}
		else {
        	$("nav").animate({backgroundColor: "transparent"}, {queue: false});
      	}
	});
});