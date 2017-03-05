$(function() {

	var i = 1;
	
	function movePicRight() {
		if(i < 5){
			$(".col-mid a:visible").hide().next().css("display","block");
			i++;
		}
		else{
			$(".col-mid a:visible").hide();
			$(".col-mid a:first-child").css("display","block");
			i = 1;
		}

	}

	function movePicLeft() {
		if(i > 1){
			$(".col-mid a:visible").hide().prev().css("display","block");
			i--;
		}
		else{
			$(".col-mid a:visible").hide();
			$(".col-mid a:last-child").css("display","block");
			i = 5;
		}
	}

	setI = setInterval(movePicRight,3000);

	$(".arr-right").click(function() {
		movePicRight();
		clearInterval(setI);
		return false;
	});

	$(".arr-left").click(function() {
		movePicLeft();
		clearInterval(setI);
		return false;
	});

});