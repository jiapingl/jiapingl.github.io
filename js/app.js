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
			target=$("#menu li:nth-child(1)");
		}
		else if(cur<=sec2&&cur>sec1){
			target=$("#menu li:nth-child(2)");
		}
		else if(cur>sec2&&cur<=sec3){
			target=$("#menu li:nth-child(3)");
		}
		else if(cur>sec3&&cur<sec4){
			target=$("#menu li:nth-child(4)");
		}
		else if(cur>=sec4){
			target=$("#menu li:nth-child(5)");
		}

		target.addClass("active");
		$("#menu li").not(target).removeClass("active");

	})

	$('#menu li a').click(function(){
    	$('.navbar-collapse').collapse('hide');
	});

	var owl = $('.owl-carousel');
	var owlCarouselTimeout = 1000;
	owl.owlCarousel({
	   nav: true,
  	   navText: ["<img src='img/back.png'>","<img src='img/next.png'>"],
	   items:4,
	   loop:true,
	   margin:10,
	   autoplay:true,
	   autoplayTimeout: 2000,
	   autoplayHoverPause:true,
	   responsiveClass:true,
	   responsive:{
	        0:{
	            items:1

	        },
	        600:{
	            items:3

	        },
	        1000:{
	            items:4
	        }
	    },
	});
	owl.on('mouseleave',function(){
	   owl.trigger('stop.owl.autoplay'); //this is main line to fix it
	   owl.trigger('play.owl.autoplay', [owlCarouselTimeout]);
	})

})



