$(document).ready(function(){
	$(".slide").click(function(e){

		var link=$(this).attr("href");
		
		var navheight=$("nav").outerHeight();

		$("html, body").animate({
			scrollTop: $(link).offset().top-1.5*navheight
		},1000);

		e.preventDefault();
	})
})
