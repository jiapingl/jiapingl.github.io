$(document).ready(function(){

	$(".slide").click(function(e){

		var link=$(this).attr("href");

		$("html, body").animate({
			scrollTop: $(link).offset().top-2*70
		},1000);

		e.preventDefault();
	})

	var sec1=$("#p1").offset().top+200;
	var sec2=$("#p2").offset().top;
	var sec3=$("#p3").offset().top;
	var sec4=$("#p4").offset().top+100;
	var sec5=$("#p5").offset().top;

	$(document).on("scroll",function(){

		var cur=$(document).scrollTop();
		var target;

		if(cur>=0&&cur<=sec1){
			target=$("#menu li:nth-child(1) a");
		}
		else if(cur<=sec2&&cur>sec1){
			target=$("#menu li:nth-child(2) a");
		}
		else if(cur>sec2&&cur<=sec3){
			target=$("#menu li:nth-child(3) a");
		}
		else if(cur>sec3&&cur<sec4){
			target=$("#menu li:nth-child(4) a");
		}
		else if(cur>=sec4){
			target=$("#menu li:nth-child(5) a");
		}

		target.addClass("active");
		$("#menu li a").not(target).removeClass("active");

	})

})

