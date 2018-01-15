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

	$('#p4 #demo').carouFredSel({

		responsive:true,
		circular:true,
		width:"100%",
		prev:"#prev",
		next:"#next",
        scroll : { 
            items            : 1,  
            duration         : 500, 
            pauseOnHover     : true 
        },
        auto:true,
        items:{
        	visible:{
        		min:1,
        		max:4
        	},
        	height:"variable"
        }

	}); 

})


