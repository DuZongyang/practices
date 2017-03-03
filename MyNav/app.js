$(function(){
	var topval = $("nav.col").offset().top;
	var botval = $(".wrapper").height()
	 - $("nav.col").height();
	$(window).on("scroll",function(){
		var scl = $(window).scrollTop();
		if(scl > topval && scl < botval){
			$(".col").css("top",scl + "px");
		}
		else if(scl < topval){
			$(".col").css("top",topval + "px");
		}
		else{
			$(".col").css("top",botval + "px");
		}

		var gttop = $(window).height() * 0.8;
		var gtleft = ($(window).width() - 60) * 0.9;
		if(scl > 400){
			$(".gotop").show();
			$(".gotop").css({
				"top" : scl + gttop+"px",
				"left" : gtleft+"px",
			});
		}
		else{
			$(".gotop").hide();
		}
	}).scroll();
});