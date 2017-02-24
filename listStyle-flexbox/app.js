$(document).ready(function(){
	var status = 1;
	$(".type").on("click",function(){
		if(!status){
			$(".type-1-c").attr("class","type-1-o");
			$(".type-2-o").attr("class","type-2-c");
			$(".list ul").removeClass("ul-col");
			status = 1;
		}
		else {
			$(".type-1-o").attr("class","type-1-c");
			$(".type-2-c").attr("class","type-2-o");
			$(".list ul").addClass("ul-col");
			status = 0;
		}
	});
});